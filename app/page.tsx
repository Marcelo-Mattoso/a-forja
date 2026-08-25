/* eslint-disable @next/next/no-img-element */

const navigation = ['Início', 'Sobre', 'Livros', 'Vídeos', 'Palestras', 'Contato'];

const socialLinks = [
  { label: 'Amazon', mark: 'a' },
  { label: 'Instagram', mark: 'IG' },
  { label: 'Facebook', mark: 'f' },
  { label: 'YouTube', mark: 'YT' },
];

const books = [
  {
    title: 'O Homem que Procurava Onde Ficar',
    volume: 'Volume 9',
    tag: 'Lançamento',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=620&q=80',
    action: 'Ver na Amazon',
  },
  {
    title: 'A Parte Morta do Jardim',
    volume: 'Volume 2',
    tag: 'Romance',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=620&q=80',
    action: 'Saiba mais',
  },
  {
    title: 'Crônicas do Café, Pão e Milagre',
    volume: 'Volume 1',
    tag: 'Crônicas',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=620&q=80',
    action: 'Saiba mais',
  },
  {
    title: 'Crônicas do Café, Pão e Milagre',
    volume: 'Volume 3',
    tag: 'Coletânea',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=620&q=80',
    action: 'Saiba mais',
  },
];

const videos = [
  {
    title: 'Primeiro meu jardim',
    episode: 'Episódio 1',
    time: '13:38',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=760&q=80',
  },
  {
    title: 'Eu amadureci, mas não quero endurecer',
    episode: 'Episódio 2',
    time: '14:12',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=760&q=80',
  },
  {
    title: 'Episódio 4 Café com Mattoso',
    episode: 'Episódio 4',
    time: '42:20',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=760&q=80',
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Café com Mattoso">
      <span className="brand-cup" aria-hidden="true">
        <span />
      </span>
      <span className={compact ? 'sr-only' : 'brand-copy'}>
        <strong>Café com Mattoso</strong>
        <small>Café, Pão e Milagre</small>
      </span>
    </a>
  );
}

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="section-label">
      <span>{label}</span>
      <i aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell" id="inicio">
      <header className="topbar">
        <BrandMark />
        <nav aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              className={item === 'Início' ? 'active' : undefined}
              href={`#${item.toLowerCase().replace('í', 'i').replace('é', 'e')}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <aside className="social-rail" aria-label="Redes e canais">
        {socialLinks.map((link) => (
          <a href="#" key={link.label} aria-label={link.label}>
            <strong>{link.mark}</strong>
            <span>{link.label}</span>
          </a>
        ))}
      </aside>

      <section className="hero">
        <div className="hero-copy">
          <h1>Marcelo Mattoso</h1>
          <p className="subtitle">Café, Pão e Milagre</p>
          <p className="intro">
            Livros, vídeos e pequenas histórias sobre fé simples, reconstrução e
            os milagres cotidianos.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#livros">
              <span aria-hidden="true" className="button-icon book-icon" />
              Ver livros
            </a>
            <a className="button secondary" href="#videos">
              <span aria-hidden="true" className="button-icon play-icon" />
              Assistir vídeos
            </a>
          </div>
          <p className="hero-note">
            <span aria-hidden="true">+</span>
            Pessoas são seus próprios milagres.
          </p>
        </div>

        <div className="hero-media" aria-label="Marcelo Mattoso em estúdio">
          <img
            alt="Escritor em uma mesa com café, pão e livros ao fundo"
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=85"
          />
          <div className="hero-fade" />
        </div>
      </section>

      <section className="content-panel" id="sobre">
        <div className="about-grid">
          <div>
            <SectionTitle label="Sobre" />
            <h2>Sobre Marcelo Mattoso</h2>
            <p>
              Escritor, desenvolvedor e criador do Café com Mattoso. Reúno
              livros, conversas e reflexões sobre trabalho, fé, reconstrução e
              os pequenos milagres humanos.
            </p>
          </div>
          <figure className="studio-card">
            <img
              alt="Estúdio intimista com mesa de madeira, microfone e iluminação quente"
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85"
            />
          </figure>
        </div>

        <div className="section-divider" />

        <section id="livros">
          <SectionTitle label="Livros" />
          <div className="book-grid">
            {books.map((book) => (
              <article className="book-card" key={`${book.title}-${book.volume}`}>
                <div className="book-cover">
                  <img alt={`Capa mockada de ${book.title}`} src={book.image} />
                  <span>{book.tag}</span>
                  <strong>{book.title}</strong>
                </div>
                <div className="book-body">
                  <h3>{book.title}</h3>
                  <p>{book.volume}</p>
                  <a href="#contato">{book.action}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="videos">
          <SectionTitle label="Vídeos" />
          <div className="video-grid">
            {videos.map((video) => (
              <article className="video-card" key={video.title}>
                <div className="video-thumb">
                  <img alt={`Thumbnail mockado do vídeo ${video.title}`} src={video.image} />
                  <span className="episode">{video.episode}</span>
                  <span className="duration">{video.time}</span>
                </div>
                <div className="video-body">
                  <h3>{video.title}</h3>
                  <a href="#videos">
                    <span aria-hidden="true" className="button-icon play-icon" />
                    Assistir
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="talks-banner" id="palestras">
          <div className="mic-mark" aria-hidden="true" />
          <div>
            <h2>Palestras</h2>
            <p>Conversas sobre fé, reconstrução e os pequenos milagres humanos.</p>
          </div>
          <a className="button primary" href="#contato">
            <span aria-hidden="true" className="button-icon mail-icon" />
            Entrar em contato
          </a>
        </section>
      </section>

      <footer className="footer-panel" id="contato">
        <div className="footer-quote">
          <span className="brand-cup" aria-hidden="true">
            <span />
          </span>
          <p>Ainda há café, pão e milagre, e muito por vir.</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#livros">Livros</a>
          <a href="#videos">Vídeos</a>
          <a href="#palestras">Palestras</a>
        </div>
        <div>
          <h3>Siga</h3>
          {socialLinks.map((link) => (
            <a href="#" key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Contato</h3>
          <a href="mailto:contato@marcelomattoso.com">contato@marcelomattoso.com</a>
          <span>Brasil</span>
        </div>
        <BrandMark compact />
        <p className="copyright">
          © 2026 Marcelo Mattoso. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
