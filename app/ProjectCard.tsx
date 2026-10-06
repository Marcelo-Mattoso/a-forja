'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';
import modalContent from './project-modal-content.json';
import type { Project } from './projects-data';

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const modal = modalContent[project.id as keyof typeof modalContent];

  const openModal = () => setIsOpen(true);

  return <article
    aria-haspopup="dialog"
    className="project-card project-card--hub"
    onClick={openModal}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal();
      }
    }}
    role="button"
    style={{ '--project-accent': modal.accentColor } as React.CSSProperties}
    tabIndex={0}
  >
    <div className="project-card-art" aria-hidden="true"><span>{project.name.slice(0, 2)}</span></div>
    <div className="project-card-copy"><div className="project-meta"><span>{project.categories.join(' · ')}</span><span className="status">{project.status}</span></div><h3>{project.name}</h3><p>{project.shortDescription}</p><div className="project-actions"><span className="project-details">Sobre o projeto <span aria-hidden="true">↗</span></span></div></div>
    <ProjectModal contentId={project.id} isOpen={isOpen} onClose={() => setIsOpen(false)} />
  </article>;
}
