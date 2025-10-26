import LightRays from '../components/LightRays';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './Projects.css'
import { projects } from "../data/ProjectData";
import ProjectInfo from "../components/ProjectInfo";
import { useRevealOnScroll } from "../components/revealScroll";
import { useState } from "react";

export default function Projects() {
  useRevealOnScroll();
  const [selectedCategory, setSelectedCategory] = useState("cs");
    return (
      <>
        <header>
          <div id="background-light">
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={1}
              rayLength={0.75}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          <div id="top-light">
            <Navbar />
            <h1>Projects</h1>
            <h3>by Riana Santos</h3>
          </div>
        </header>
        <div className="category-select">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="cs">Computer Science</option>
            <option value="r">Research</option>
            <option value="sm">Social Media</option>
          </select>
        </div>
        <section className={`projects-section ${selectedCategory === "cs" ? "visible" : "hidden"}`}>
          {projects.map((project, index) => (
            <ProjectInfo
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </section>
        <section className={`research-section ${selectedCategory === "r" ? "visible" : "hidden"}`}>
          <div className={`project-card reveal slide-left`}>
            <div className="research-image">
              <img src="/projectPics/sludge.png"></img>
              <p><span>I led this research project as a project manager and team lead for two years, overseeing 12 members.</span> I love discussing this topic, so feel free to ask me more about this project!</p>
              <a href=""><button>See Project</button></a>
            </div>
            <div className="research-content">
              <section className="project-name">
                <h2 className="research-name">
Sludge Videos: Media Multitasking & Overstimulation Video Content on Social Media</h2>
                <p className="research-date">May 2023 - Jun 2025</p>
              </section>
              <hr></hr>
              <p>Advised by Professor David Jeong, we conducted two mixed method studies to observe the effects of "sludge videos," a type of
short-form video on social media that manufactures multitasking within a given platform. Our findings were written into a research paper, which was accepted and presented in the 74th ICA Conference.</p>
              <p>The goal of the study was to understand how a certain video format impacts attention and information retention of the viewer, inspired by rising concerns of diminishing attention spans in younger generations.</p>
            </div>
          </div>
          <div className={`project-card reveal reverse slide-right`}>
            <div className="research-image">
              <img src="/projectPics/sludge.png"></img>
              <p><span>This was my first ever research project I contributed to.</span> It introduced me to Game Studies and inspired me to pursue further research in contemporary media and media psychology.</p>
              <a href=""><button>See Project</button></a>
            </div>
            <div className="research-content">
              <section className="project-name">
                <h2 className="research-name">
Toxic Impact: A Sentiment Analysis of Toxicity Within the Genshin Impact Twitter Community</h2>
                <p className="research-date">Oct 2022 - Nov 2022</p>
              </section>
              <hr></hr>
              <p>Advised by Professor David Jeong, we conducted a study to examine player sentiments during the viral backlash of Genshin Impact's first anniversary event. Our findings were written into a research paper, which was accepted and presented in the 73rd ICA Conference.</p>
              <p>Through the study, we aimed to understand how social media helped shaped the public opinion and perception of Genshin Impact and its player-base.</p>
            </div>
          </div>
        </section>
        <section className={`videos-section ${selectedCategory === "sm" ? "visible" : "hidden"}`}>
          <p>SOCIAL MEDIA</p>
        </section>
        <Footer />
      </>
    );
  }