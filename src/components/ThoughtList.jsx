import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"

const ThoughtList = ({ thoughts, API_URL, onLike }) => {

  const handleLikeClick = async (thoughtId) => {
    onLike(thoughtId)

    try {
      const response = await fetch(`${API_URL}/${thoughtId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })

      if (!response.ok) {
      }
    } catch (error) {
      console.error("Could not like thought:", error)
    }
  }

  return (
    <section className="thought-list">
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought-card">
          <p className="thought-message">{thought.message}</p>

          <div className="thought-footer">
            <div className="like-section">
              <button
                onClick={() => handleLikeClick(thought._id)}
                className={`heart-button ${thought.hearts > 0 ? "has hearts" : ""}`}
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
      ))}
    </section>
  )
}

export default ThoughtList