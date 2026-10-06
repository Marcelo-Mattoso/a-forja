'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from './projects-data';
import { useModalScrollLock } from './useModalScrollLock';

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  useModalScrollLock(isOpen);
  useEffect(() => { if (!isOpen) return; closeButton.current?.focus(); const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [isOpen]);
  return <article className="project-card project-card--hub" style={{ '--project-accent': project.accentColor } as React.CSSProperties}>
    <div className="project-card-art" aria-hidden="true"><span>{project.name.slice(0, 2)}</span></div>
    <div className="project-card-copy"><div className="project-meta"><span>{project.categories.join(' · ')}</span><span className="status">{project.status}</span></div><h3>{project.name}</h3><p>{project.shortDescription}</p><div className="project-actions"><button className="project-details" type="button" onClick={() => setIsOpen(true)}>Sobre o projeto <span aria-hidden="true">↗</span></button></div></div>
    {isOpen && <div className="project-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`${project.id}-title`}><button ref={closeButton} className="project-modal-close" type="button" aria-label="Fechar" onClick={() => setIsOpen(false)}>×</button><p className="eyebrow">{project.categories.join(' · ')}</p><h2 id={`${project.id}-title`}>{project.name}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="status">{project.status}</span></section></div>}
  </article>;
}
