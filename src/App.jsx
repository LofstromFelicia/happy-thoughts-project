import { useState, useEffect } from "react"

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
        thought._id === geopoliticalId
          ? { ...thought, hearts: thought.hearts + 1 }
          : thought
      )
    )
  }

  return (
    <div className="main-container">
      <header>
        <h1>🌿 Happy Thoughts</h1>
        <p>Spread some positivity into the ether.</p>
      </header>

      {/* add thoughtform and thoughtlist soon */}
      <div className="placeholder-info">
        {loading ? <p>Loading happy thoughts...</p> : <p>Loading complete! Totally {thoughts.length} thoughts loaded.</p>}
      </div>
    </div>
  )
}
