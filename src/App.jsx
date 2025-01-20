import React from "react"
import "./App.css"
import YURIKO from "./assets/YURIKO.jpg"

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1 className="name">YURIKO TORRES</h1>
        <p className="title">QUALITY ASSURANCE</p>
      </header>

      <div className="profile">
        <img src={YURIKO || "/placeholder.svg"} alt="Profile" className="profile-picture" />
      </div>

      <section className="about">
        <h2>About Me</h2>
        <p>I'm a Quality Assurance professional.</p>
      </section>

      <section className="projects">
        <h2>Tasks</h2>
        <div className="project-card">
          <h3>TESTING</h3>
          <p>Perform thorough testing of software applications.</p>
        </div>
        <div className="project-card">
          <h3>SPOT FOR BUGS</h3>
          <p>Identify and report software bugs and issues.</p>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Yuriko Torres</p>
      </footer>
    </div>
  )
}

export default App

