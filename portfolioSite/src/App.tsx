import './App.css'
import Aurora from './Aurora';


function App() {

  return (
    <>
      <header>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={5.0}
          speed={1.0}
        />
        <h1>Portfolio</h1>
        <h3>by Riana Santos</h3>
      </header>
      <section id="mission">
        <h1>Hi there, I'm Riana!!</h1>
        <p>As a recent Computer Science & Engineering graduate, I'm passionate about 
          <span>creating impactful digital solutions</span> and 
          <span>exploring innovative technology.</span>
        </p>
        <p>I aspire to continue exploring the intersection of technology, society, and design in an 
          <span>entry-level role</span>, where I can further expand my skills.
        </p>
      </section>
      <section id="education">
        <h1>Education</h1>
      </section>
      <section id="skills">
        <h1>Technical Skills</h1>
      </section>
      <section id="experience">
        <h1>Work Experience</h1>
      </section>
    </>
  )
}

export default App
