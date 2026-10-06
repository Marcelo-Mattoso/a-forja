'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import modalContent from './project-modal-content.json';
import { useModalScrollLock } from './useModalScrollLock';

type ProjectModalProps = {
  contentId: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ contentId, isOpen, onClose }: ProjectModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const content = modalContent[contentId as keyof typeof modalContent];

  useModalScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    closeButton.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  return createPortal(
    <div
      className="project-modal-backdrop"
      onClick={(event) => event.stopPropagation()}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${contentId}-title`}
        style={{ '--project-accent': content.accentColor } as React.CSSProperties}
      >
        <button ref={closeButton} className="project-modal-close" type="button" aria-label="Fechar" onClick={onClose}>×</button>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${contentId}-title`}>{content.name}</h2>
        <p>{content.description}</p>
        <div className="project-tags">{content.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <span className="status">{content.status}</span>
        {content.href ? (
          <a className="project-external-link" href={content.href} rel="noreferrer" target="_blank" title={content.title}>
            <span>Site do projeto</span>
            <strong>{content.title} <b aria-hidden="true">↗</b></strong>
          </a>
        ) : (
          <div className="project-external-link project-external-link--pending">
            <span>Site do projeto</span>
            <strong>Em breve</strong>
          </div>
        )}
      </section>
    </div>,
    document.body,
  );
}
