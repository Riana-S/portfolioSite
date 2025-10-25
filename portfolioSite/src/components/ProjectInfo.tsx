import "./ProjectInfo.css";
import { type Project } from "../data/ProjectData";
import TechCarousel from "./TechCarousel";

interface ProjectInfoProps {
  project: Project;
  reverse?: boolean; // controls image/text order
}

export default function ProjectInfo({ project, reverse = false }: ProjectInfoProps) {
  return (
    <div className={`project-card reveal ${reverse ? "reverse slide-right" : "slide-left"}`}>
      <div className="project-image">
        <img src={project.images} alt={project.title} />
      </div>
      <div className="project-content">
        <section className="project-name">
            <h2>{project.title}</h2>
            <p>{project.date}</p>
        </section>
        <hr></hr>
        <p>{project.description}</p>
        <TechCarousel logos={project.techStack} />
        <section className="project-links">
            {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
            )}
            {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
                View GitHub
            </a>
            )}
        </section>
      </div>
    </div>
  );
}
