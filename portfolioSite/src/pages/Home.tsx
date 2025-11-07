import './Home.css'
import Aurora from '../components/Aurora';
import { useRevealOnScroll } from "../components/revealScroll";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  useRevealOnScroll();

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
          <Navbar />
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
              <a href="https://drive.google.com/file/d/1xB7PxCUvQ7tgiEm-xKZjFdLgti1t_6J3/view?usp=sharing"><button>Resume</button></a>
              <a href="https://drive.google.com/file/d/1tcWnBJQmFXgCOFLpXwL5FOnT7uEzJ6lO/view?usp=sharing"><button>CV</button></a>
            </div>
            <div id="socials">
              <a href="https://linkedin.com/in/riana-santos/">
                <img src="/LinkedIn_logo.png"></img>
              </a>
              <a href="https://github.com/Riana-S">
                <img src="/techStack/github.png"></img>
              </a>
              <a href="https://youtube.com/@rhianina?si=rDgn1vqPx0f35P2P">
                <img src="/Youtube_logo.png"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="reveal" id="education">
        <h2>Education</h2>
        <div id="schools">
          <img src="/companies/scu.png"></img>
          <div className="info">
            <h3>B.S. Computer Science & Engineering</h3>
            <p>Cumulative GPA: 3.5/4.0</p>
            <p>Cum Laude Graduation Honors</p>
          </div>
          <p>Sep 2021 - June 2025</p>
          <img src="/companies/yonsei.png"></img>
          <div className="info">
            <h3>Computer Science</h3>
            <p>Cumulative GPA: 3.8/4.0</p>
            <p>Study Abroad Fall Semester</p>
          </div>
          <p>Sep 2023 - Dec 2023</p>
        </div>
      </section>
      <section className="reveal" id="skills">
        <h2>Technical Skills</h2>
        <div id="mainSkills">
          <img src="/techStack/html.png"></img>
          <img src="/techStack/css.png"></img>
          <img src="/techStack/JavaScript-logo.png"></img>
          <img src="/techStack/cPlus.png"></img>
          <img src="/techStack/swift.png"></img>
          <img src="/techStack/python.png"></img>
        </div>
        <div id="otherSkills">
          <img src="/techStack/vscode.png"></img>
          <img src="/techStack/Typescript_logo.png"></img>
          <img src="/techStack/Xcode_icon.png"></img>
          <img src="/techStack/figma.png"></img>
          <img src="/techStack/msOffice.png"></img>
          <img src="/techStack/vite.svg"></img>
          <img src="/techStack/react.png"></img>
          <img src="/techStack/unity.png"></img>
          <img src="/techStack/C4D_Logo.png"></img>
          <img src="/techStack/git.png"></img>
        </div>
      </section>
      <section className="reveal" id="experience">
        <h2>Work Experience</h2>
        <section className="reveal">
          <div className="workExp">
            <img src="/companies/bytedance.png"></img>
            <div className="work">
              <div className="job">
                <p className="role">Developer Influencer</p>
                <p className="workInfo">Sep 2025 - Oct 2025</p>
                <p className="company">ByteDance</p>
                <p className="workInfo">Remote</p>
              </div>
              <div className="topSkills">
                <p className="skill">TypeScript</p>
                <p className="skill">HTML / CSS</p>
                <p className="skill">Apple Vision Pro</p>
                <p className="skill">Video Editing</p>
                <p className="skill">Figma</p>
              </div>
            </div> 
          </div>
        </section>
        <section className="reveal">
          <div className="workExp">
            <img src="/companies/scu_imaginarium_logo.jpeg"></img>
            <div className="work">
              <div className="job">
                <p className="role">Lab Technician & Research Lead</p>
                <p className="workInfo">Feb 2023 - Jun 2025</p>
                <p className="company">SCU Imaginarium</p>
                <p className="workInfo">Part-Time In-Person</p>
              </div>
              <div className="topSkills">
                <p className="skill">Social Sciences</p>
                <p className="skill">Quant-Qual Methods</p>
                <p className="skill">VR</p>
                <p className="skill">Event Planning</p>
                <p className="skill">Video Editing</p>
              </div>
            </div> 
          </div>
        </section>
        <section className="reveal">
          <div className="workExp">
            <img src="/companies/shc.png"></img>
            <div className="work">
              <div className="job">
                <p className="role">IT Ambulatory Services Intern</p>
                <p className="workInfo">Jun 2024 - Sep 2024</p>
                <p className="company">Stanford Health Care</p>
                <p className="workInfo">Full-Time Hybrid</p>
              </div>
              <div className="topSkills">
                <p className="skill">Epic</p>
                <p className="skill">Test Scripts</p>
                <p className="skill">Regression Testing</p>
                <p className="skill">VBA</p>
                <p className="skill">HTML</p>
              </div>
            </div> 
          </div>
        </section>
        <section className="reveal">
          <div className="workExp">
            <img src="/companies/ies.png"></img>
            <div className="work">
              <div className="job">
                <p className="role">Blogger Correspondent</p>
                <p className="workInfo">Aug 2023 - Jan 2024</p>
                <p className="company">IES Abroad</p>
                <p className="workInfo">Part-Time</p>
              </div>
              <div className="topSkills">
                <p className="skill">Video Editing</p>
                <p className="skill">Travel Blogging</p>
                <p className="skill">Social Media</p>
              </div>
            </div> 
          </div>
        </section>
        <section className="reveal">
          <div className="workExp">
            <img src="/companies/shc.png"></img>
            <div className="work">
              <div className="job">
                <p className="role">IT Ambulatory Services Intern</p>
                <p className="workInfo">Jun 2023 - Aug 2023</p>
                <p className="company">Stanford Health Care</p>
                <p className="workInfo">Full-Time Hybrid</p>
              </div>
              <div className="topSkills">
                <p className="skill">Data Analysis</p>
                <p className="skill">Service Now</p>
                <p className="skill">Microsoft Excel</p>
                <p className="skill">Qual Methods</p>
                <p className="skill">Security Review</p>
              </div>
            </div> 
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}
