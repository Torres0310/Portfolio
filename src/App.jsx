import "./App.css";
import YURIKO from "./assets/YURIKO.jpg";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#contest">Entered Contest</a></li>
          <li><a href="#skills">Skills & Expertise</a></li>
          <li><a href="#current">What You’re Currently Working On</a></li>
          <li><a href="#career">Career Goals</a></li>
          <li><a href="#personal">Personal Touch</a></li>
          <li><a href="#contact">Call to Action</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src={YURIKO ? YURIKO : "/placeholder.svg"}
            alt="Yuriko Torres"
            className="profile-picture"
          />
          <h1 className="name">YURIKO JOAQUIN TORRES</h1>
          <p className="title">QUALITY ASSURANCE PROFESSIONAL</p>
          <p className="tagline">"Ensuring software quality, one test at a time."</p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* About Me Section */}
        <section id="introduction" className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I'm a dedicated Quality Assurance professional with a passion for identifying and resolving software issues
              to enhance user experience. With an analytical mindset and strong problem-solving skills, I ensure that
              every product meets the highest quality standards.
            </p>
          </div>
        </section>

        {/* Entered Contest Section */}
        <section id="contest" className="entered-contest">
          <div className="container">
            <h2>Entered Contest</h2>
            <p>None so far.
            </p>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section id="skills" className="tasks">
          <div className="container">
            <h2>Skills & Expertise</h2>
            <ul>
              <li> Manual & Automated Testing</li>
              <li> Bug Tracking & Reporting</li>
              <li> Test Case Development</li>
              <li> Selenium, JIRA, TestRail</li>
              <li> API Testing with Postman</li>
              <li> Agile & Scrum Methodologies</li>
            </ul>
          </div>
        </section>

        {/* Current Work Section */}
        <section id="current" className="current-work">
          <div className="container">
            <h2>What I’m Currently Working On</h2>
            <p>
              Currently testing a <strong>financial software platform</strong>, ensuring compliance with security regulations and
              improving user interface efficiency.
            </p>
          </div>
        </section>

        {/* Career Goals Section */}
        <section id="career" className="career-goals">
          <div className="container">
            <h2>Career Goals</h2>
            <p>
              My goal is to become a <strong>Senior QA Engineer</strong> specializing in test automation and security testing. I'm 
              also passionate about mentoring junior testers and contributing to open-source testing projects.
            </p>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section id="personal" className="personal-touch">
          <div className="container">
            <h2>Personal Touch</h2>
            <p>
              Outside of work, I enjoy playing action games, reading tech blogs, and watching youtube. and frequently participate in QA community events.
            </p>
          </div>
        </section>

        {/* Contact / Call to Action Section */}
        <section id="contact" className="call-to-action">
          <div className="container">
            <h2>Let's Connect!</h2>
            <p>
              Feel free to reach out for collaboration, career advice, or just to chat about tech!
            </p>
            <a href="https://web.facebook.com/riyu.sero.10/" className="contact-btn">Contact Me</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Yuriko Torres | Quality Assurance Professional</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
