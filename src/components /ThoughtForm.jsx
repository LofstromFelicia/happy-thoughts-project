import { useState } from "react"

const ThoughtForm = ({ API_URL, onThoughtSubmitted }) => {
  const [newThought, setNewThought] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSurveySubmit = async (event) => {
    event.preventDefault()

    if (newThought.length < 5) {
      setErrorMessage("Your thought must be at least 5 characters long. ❤️")
      return
    }
    if (newThought.length > 140) {
      setErrorMessage("Your thought is too long! Max 140 characters. 🌿")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newThought }),
      })

      const data = await response.json()

      if (response.ok) {
        onThoughtSubmitted(data) // send up new thought to app.jsx
        setNewThought("") // empty messagefield after post
      } else {
        setErrorMessage(data.message) || ("Something went wrong. Try again!") // send validation fault in UI
      }
    } catch (error) {
      setErrorMessage("Could not connect to the server. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSurveySubmit} className="thought-form">
      <h3>What's making you happy right now?</h3>
      <textarea
        placeholder="Type your happy thought here..."
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />

      {errorMessage && <p className="error-text">{errorMessage}</p>}

      <div className="form-footer">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending... ❤️" : "❤️ Send Happy Thought"}
        </button>
        {/* Counter gets red if character count is invalid */}
        <span className={`character-count ${newThought.length > 140 || (newThought.length > 0 && newThought.length < 5) ? "invalid" : ""}`}>
          {140 - newThought.length} characters left
        </span>
      </div>
    </form>
  )
}

export default ThoughtForm