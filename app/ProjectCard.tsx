'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';
import type { Project } from './projects-data';

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return <article className="project-card project-card--hub" style={{ '--project-accent': project.accentColor } as React.CSSProperties}>
    <div className="project-card-art" aria-hidden="true"><span>{project.name.slice(0, 2)}</span></div>
    <div className="project-card-copy"><div className="project-meta"><span>{project.categories.join(' · ')}</span><span className="status">{project.status}</span></div><h3>{project.name}</h3><p>{project.shortDescription}</p><div className="project-actions"><button className="project-details" type="button" onClick={() => setIsOpen(true)}>Sobre o projeto <span aria-hidden="true">↗</span></button></div></div>
    <ProjectModal contentId={project.id} isOpen={isOpen} onClose={() => setIsOpen(false)} />
  </article>;
}
