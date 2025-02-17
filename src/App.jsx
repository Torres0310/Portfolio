import "./App.css"
import YURIKO from "./assets/YURIKO.jpg"

function App() {
  return (
    <div className="portfolio">
      <section className="hero">
        <div className="hero-content">
          <img src={YURIKO || "/placeholder.svg"} alt="Yuriko Torres" className="profile-picture" />
          <h1 className="name">YURIKO TORRES</h1>
          <p className="title">QUALITY ASSURANCE</p>
        </div>
      </section>

      <main>
        <section className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I'm a dedicated Quality Assurance professional with a keen eye for detail and a passion for ensuring
              top-notch software quality. With my expertise in testing methodologies and bug identification, I
              contribute to creating robust and user-friendly applications.
            </p>
          </div>
        </section>

        <section className="tasks">
          <div className="container">
            <h2>Key Tasks</h2>
            <div className="task-grid">
              <div className="task-card">
                <h3>TESTING</h3>
                <p>
                  Perform thorough testing of software applications, ensuring they meet the highest quality standards
                  and user expectations.
                </p>
              </div>
              <div className="task-card">
                <h3>SPOT FOR BUGS</h3>
                <p>
                  Identify and report software bugs and issues, collaborating with development teams to enhance product
                  reliability and user experience.
                </p>
              </div>
              <div className="task-card">
                <h3>QUALITY ASSURANCE</h3>
                <p>
                  Develop and implement QA processes and methodologies to maintain consistent quality across all
                  software projects.
                </p>
              </div>
              <div className="task-card">
                <h3>DOCUMENTATION</h3>
                <p>
                  Create comprehensive test plans, test cases, and reports to ensure clear communication and
                  traceability in the QA process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Yuriko Torres | Quality Assurance Professional</p>
        </div>
      </footer>
    </div>
  )
}

export default App

