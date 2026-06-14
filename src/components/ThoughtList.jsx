import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"

const ThoughtList = ({ thoughts, API_URL, onLike }) => {
  const [likedThoughts, setLikedThoughts] = useState([])

  const handleLikeClick = async (thoughtId) => {
    onLike(thoughtId)

    if (!likedThoughts.includes(thoughtId)) {
      setLikedThoughts((prevLiked) => [...prevLiked, thoughtId])
    }

    try {
      await fetch(`${API_URL}/${thoughtId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
    } catch (error) {
      console.error("Could not like thought:", error)
    }
  }

  return (
    <section className="thought-list">
      {thoughts.map((thought) => {
        const isLikedByMe = likedThoughts.includes(thought._id)

        return (
          <div key={thought._id} className="thought-card" >
            <p className="thought-message">{thought.message}</p>

            <div className="thought-footer">
              <div className="like-section">
                <button
                  onClick={() => handleLikeClick(thought._id)}
                  className={`heart-button ${isLikedByMe ? "has hearts" : ""}`}
                  style={{ backgroundColor: isLikedByMe ? "#ffb3c1" : "#eaeaea" }}
                >
                  ❤️
                </button>
                <span className="like-count">x {thought.hearts}</span>
              </div>

              <p className="thought-time">
                {formatDistanceToNow(new Date(thought.createdAt), { addSuffix: true, locale: enUS })}
              </p>
            </div>
          </div>
        )
      })}
    </section >
  )
}

export default ThoughtList