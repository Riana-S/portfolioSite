import LightRays from '../components/LightRays';
import Navbar from '../components/navbar';
import './Projects.css'
import { projects } from "../data/ProjectData";
import ProjectInfo from "../components/ProjectInfo";
import { useRevealOnScroll } from "../components/revealScroll";

export default function Projects() {
  useRevealOnScroll();
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
        <section className="projects-section">
          {projects.map((project, index) => (
            <ProjectInfo
              key={project.id}
              project={project}
              reverse={index % 2 !== 0} // alternate layout
            />
          ))}
        </section>
      </>
    );
  }