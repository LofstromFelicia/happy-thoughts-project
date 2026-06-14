import { useState, useEffect } from "react"
import ThoughtForm from "./components/ThoughtForm"
import ThoughtList from "./components/ThoughtList"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)

  const API_URL = "https://happy-thoughts-api-4ful.onrender.com/thoughts"

  // fetch 20 latest thoughts from api
  const fetchThoughts = async () => {
    setLoading(true)
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setThoughts(data)
    } catch (error) {
      console.error("Could not fetch thoughts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  // function to add new thoughts 
  const addNewThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts])
  }

  // function to add hearts
  const handleLikeThought = (thoughtId) => {
    setThoughts((prevThoughts) =>
      prevThoughts.map((thought) =>
        thought._id === thoughtId
          ? { ...thought, hearts: thought.hearts + 1 }
          : thought
      )
    )
  }

  return (
    <div className="main-container">
      <header>
        <h1>Happy <span className="header-heart">❤️</span>Thoughts</h1>
        <p>Spread some positivity into the ether.</p>
      </header>

      <ThoughtForm API_URL={API_URL} onThoughtSubmitted={addNewThought} />

      {/* Show spinner when loading */}
      {loading ? (
        <div className="loading-spinner">Loading happy thoughts...</div>
      ) : (
        <ThoughtList
          thoughts={thoughts}
          API_URL={API_URL}
          onLike={handleLikeThought}
        />
      )}

      {/* FOOTER */}
      <footer className="app-footer">
        <p>Created by Felicia Löfström</p>
        <p className="footer-credits">Technigo Web Development Bootcamp 2026</p>
      </footer>
    </div>
  )
}
