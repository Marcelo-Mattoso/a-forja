import Link from 'next/link';
import type { Project } from './projects-data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-cover">
        {project.coverImage ? <img src={project.coverImage} alt="" /> : <span aria-hidden="true">{project.category}</span>}
      </div>
      <div className="project-card-copy">
        <div className="project-meta"><span>{project.category}</span><span className={`status status--${project.status.toLowerCase().replaceAll(' ', '-')}`}>{project.status}</span></div>
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
        <Link className="text-link" href={project.internalRoute}>Conhecer o projeto <b>→</b></Link>
      </div>
    </article>
  );
}
