# 🌿 Happy Thoughts Project

A responsive React web application built as part of the Technigo Web Development Bootcamp (2026). The app connects to a shared API, allowing users to view the 20 most recent "happy thoughts", post their own positive messages, and interact by liking other users' thoughts in real-time.

## 🚀 Live Demo
[👉 Click here to view the live project on Cloudflare Pages](HÄR_KLISTRAR_DU_IN_DIN_CLOUDFLARE_LÄNK)

---

## 🎨 Design & Features
This project features a personalized **Vaporwave / Soft Retro** aesthetic, mixing cozy pastel tones with a playful UI.

* **Real-time Feed:** Fetches and displays the 20 most recent thoughts, sorted with the newest on top.
* **Optimistic Updates:** The heart/like button updates the UI instantly for a snappy, zero-lag user experience.
* **Character Counter:** Built-in validation in the form that tracks character limits (0–140) and turns red when exceeding the limit.
* **Error Handling:** Friendly UI error messages if a user tries to submit an empty, too short, or too long thought.
* **Smooth Loading States:** Features a custom pulsing loading animation while fetching data from the API.
* **Fully Responsive:** Styled using modern CSS and media queries to ensure a perfect layout on all devices from small mobiles (320px) up to large desktops (1600px).
* **Polished UX Details:** Includes a custom heart favicon, subtle background heart patterns, a pulsing header animation, and active visual states for liked buttons.

---

## 🛠️ Tech Stack & Tools
* **Frontend Framework:** React (Vite)
* **Styling:** Vanilla CSS (Custom properties, Flexbox, Media Queries, Keyframe Animations)
* **Date Formatting:** `date-fns` (for human-readable timestamps like "3 minutes ago")
* **Deployment:** Cloudflare Pages

---