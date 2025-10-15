import './App.css'
import Aurora from './Aurora';


function App() {

  return (
    <>
      <header>
        <div id="background-aurora">
          <Aurora
            colorStops={["#CA2468", "#1794AA", "#7122C2"]}
            blend={1.0}
            amplitude={2.25}
            speed={1.0}
          />
        </div>
        <div id="top-aurora">
          <h1>Portfolio</h1>
          <h3>by Riana Santos</h3>
        </div>
      </header>
      <section id="mission">
        <img src="/IMG_9467.png"></img>
        <div id="intro">
          <h2>Hi there, I'm Riana!!</h2>
          <p>As a recent Computer Science & Engineering graduate, I'm passionate about
            <span> creating impactful digital solutions</span> and 
            <span> exploring innovative technology.</span>
          </p>
          <p>I aspire to continue exploring the intersection of technology, society, and design in an 
            <span> entry-level role</span>, where I can further expand my skills.
          </p>
          <div id="connect">
            <div id="resume">
              <button>Resume</button>
              <button>CV</button>
            </div>
            <div id="socials">
              <a href="https://linkedin.com/in/riana-santos/">
                <img src="/LinkedIn_logo.png"></img>
              </a>
              <a href="https://github.com/Riana-S">
                <img src="/github.png"></img>
              </a>
              <a href="https://youtube.com/@rhianina?si=rDgn1vqPx0f35P2P">
                <img src="/Youtube_logo.png"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="education">
        <h2>Education</h2>
      </section>
      <section id="skills">
        <h2>Technical Skills</h2>
      </section>
      <section id="experience">
        <h2>Work Experience</h2>
      </section>
    </>
  )
}

export default App
