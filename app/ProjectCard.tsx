/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { Project } from './projects-data';

type ProjectCardProps = { project: Project };
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (!isOpen) return; closeButton.current?.focus(); const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); }; document.body.style.overflow = 'hidden'; window.addEventListener('keydown', onKey); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); }; }, [isOpen]);
  const details = <button className="project-details" type="button" onClick={() => setIsOpen(true)}>Sobre o projeto <span aria-hidden="true">↗</span></button>;
  return <article className="project-card project-card--hub" style={{ '--project-accent': project.accentColor } as React.CSSProperties}>
    <div className="project-card-art">{project.coverImage ? <img src={project.coverImage} alt="" loading="lazy" decoding="async" /> : <span aria-hidden="true">{project.name.slice(0, 2)}</span>}</div>
    <div className="project-card-copy"><div className="project-meta"><span>{project.categories.join(' · ')}</span><span className="status">{project.status}</span></div><h3>{project.name}</h3><p>{project.shortDescription}</p><div className="project-actions">{project.url ? <Link className="text-link" href={project.url}>{project.cta ?? 'Conhecer projeto'} <b>→</b></Link> : details}</div></div>
    {isOpen && <div className="project-modal-backdrop" onMouseDown={() => setIsOpen(false)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`${project.id}-title`} onMouseDown={(event) => event.stopPropagation()}><button ref={closeButton} className="project-modal-close" type="button" aria-label="Fechar" onClick={() => setIsOpen(false)}>×</button><p className="eyebrow">{project.categories.join(' · ')}</p><h2 id={`${project.id}-title`}>{project.name}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="status">{project.status}</span></section></div>}
  </article>;
}
