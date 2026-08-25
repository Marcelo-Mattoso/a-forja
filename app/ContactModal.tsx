'use client';

import { FormEvent, useEffect, useState } from 'react';

const contactEmail = 'mmattoso900@gmail.com';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const senderEmail = String(formData.get('email') ?? '').trim();
    const subject =
      String(formData.get('subject') ?? '').trim() ||
      'Contato pelo site Café com Mattoso';
    const message = String(formData.get('message') ?? '').trim();
    const body = [
      `Email para retorno: ${senderEmail}`,
      '',
      'Mensagem:',
      message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  }

  return (
    <>
      <button className="button primary contact-open-button" type="button" onClick={() => setIsOpen(true)}>
        <span aria-hidden="true" className="button-icon mail-icon" />
        Entrar em contato
      </button>

      {isOpen ? (
        <div className="contact-modal-backdrop" role="presentation">
          <div
            aria-labelledby="contact-modal-title"
            aria-modal="true"
            className="contact-modal"
            role="dialog"
          >
            <button
              aria-label="Fechar formulário de contato"
              className="contact-modal-close"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2 id="contact-modal-title">Entrar em contato</h2>
            <p>Envie sua mensagem para o Café com Mattoso.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Email
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="seuemail@exemplo.com"
                  required
                  type="email"
                />
              </label>
              <label>
                Assunto
                <input
                  name="subject"
                  placeholder="Sobre palestras, livros ou conversas"
                  required
                  type="text"
                />
              </label>
              <label>
                Mensagem
                <textarea
                  name="message"
                  placeholder="Escreva sua mensagem"
                  required
                  rows={5}
                />
              </label>
              <div className="contact-modal-actions">
                <button className="button secondary" type="button" onClick={() => setIsOpen(false)}>
                  Cancelar
                </button>
                <button className="button primary" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
