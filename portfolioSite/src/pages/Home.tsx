import './Home.css'
import Aurora from '../components/Aurora';
import { useRevealOnScroll } from "../components/revealScroll";
import Navbar from '../components/navbar';

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
      <section class="reveal" id="education">
        <h2>Education</h2>
        <div id="schools">
          <img src="/scu.png"></img>
          <div class="info">
            <p class="major">B.S. Computer Science & Engineering</p>
            <p>Cumulative GPA: 3.5/4.0</p>
            <p>Cum Laude Graduation Honors</p>
          </div>
          <p>Sep 2021 - June 2025</p>
          <img src="/yonsei.png"></img>
          <div class="info">
            <p class="major">Computer Science</p>
            <p>Cumulative GPA: 3.8/4.0</p>
            <p>Study Abroad Fall Semester</p>
          </div>
          <p>Sep 2023 - Dec 2023</p>
        </div>
      </section>
      <section class="reveal" id="skills">
        <h2>Technical Skills</h2>
        <div id="mainSkills">
          <img src="/html.png"></img>
          <img src="/css.png"></img>
          <img src="/JavaScript-logo.png"></img>
          <img src="/cPlus.png"></img>
          <img src="/swift.png"></img>
          <img src="/python.png"></img>
        </div>
        <div id="otherSkills">
          <img src="/vscode.png"></img>
          <img src="/Typescript_logo.png"></img>
          <img src="/Xcode_icon.png"></img>
          <img src="/figma.png"></img>
          <img src="/msOffice.png"></img>
          <img src="/vite.svg"></img>
          <img src="/react.png"></img>
          <img src="/unity.png"></img>
          <img src="C4D_Logo.png"></img>
          <img src="git.png"></img>
        </div>
      </section>
      <section class="reveal" id="experience">
        <h2>Work Experience</h2>
        <section class="reveal">
          <div class="card">
            <img src="/bytedance.png"></img>
            <div class="work">
              <div class="job">
                <p class="role">Developer Influencer</p>
                <p class="workInfo">Sep 2025 - Oct 2025</p>
                <p class="company">ByteDance</p>
                <p class="workInfo">Remote</p>
              </div>
              <div class="topSkills">
                <button>TypeScript</button>
                <button>HTML / CSS</button>
                <button>Apple Vision Pro</button>
                <button>Video Editing</button>
                <button>Figma</button>
              </div>
            </div> 
          </div>
        </section>
        <section class="reveal">
          <div class="card">
            <img src="/scu_imaginarium_logo.jpeg"></img>
            <div class="work">
              <div class="job">
                <p class="role">Lab Technician & Research Lead</p>
                <p class="workInfo">Feb 2023 - Jun 2025</p>
                <p class="company">SCU Imaginarium</p>
                <p class="workInfo">Part-Time In-Person</p>
              </div>
              <div class="topSkills">
                <button>Social Sciences</button>
                <button>Quant-Qual Methods</button>
                <button>VR</button>
                <button>Event Planning</button>
                <button>Video Editing</button>
              </div>
            </div> 
          </div>
        </section>
        <section class="reveal">
          <div class="card">
            <img src="/shc.png"></img>
            <div class="work">
              <div class="job">
                <p class="role">IT Ambulatory Services Intern</p>
                <p class="workInfo">Jun 2024 - Sep 2024</p>
                <p class="company">Stanford Health Care</p>
                <p class="workInfo">Full-Time Hybrid</p>
              </div>
              <div class="topSkills">
                <button>Epic</button>
                <button>Test Scripts</button>
                <button>Regression Testing</button>
                <button>VBA</button>
                <button>HTML</button>
              </div>
            </div> 
          </div>
        </section>
        <section class="reveal">
          <div class="card">
            <img src="/ies.png"></img>
            <div class="work">
              <div class="job">
                <p class="role">Blogger Correspondent</p>
                <p class="workInfo">Aug 2023 - Jan 2024</p>
                <p class="company">IES Abroad</p>
                <p class="workInfo">Part-Time</p>
              </div>
              <div class="topSkills">
                <button>Video Editing</button>
                <button>Travel Blogging</button>
                <button>Social Media</button>
              </div>
            </div> 
          </div>
        </section>
        <section class="reveal">
          <div class="card">
            <img src="/shc.png"></img>
            <div class="work">
              <div class="job">
                <p class="role">IT Ambulatory Services Intern</p>
                <p class="workInfo">Jun 2023 - Aug 2023</p>
                <p class="company">Stanford Health Care</p>
                <p class="workInfo">Full-Time Hybrid</p>
              </div>
              <div class="topSkills">
                <button>Data Analysis</button>
                <button>Service Now</button>
                <button>Microsoft Excel</button>
                <button>Qual Methods</button>
                <button>Security Review</button>
              </div>
            </div> 
          </div>
        </section>
      </section>
      <footer>
        <p>FOOTER</p>
      </footer>
    </>
  )
}
