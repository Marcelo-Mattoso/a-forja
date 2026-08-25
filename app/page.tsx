/* eslint-disable @next/next/no-img-element */

import ContactModal from './ContactModal';

const navigation = ['Início', 'Sobre', 'Livros', 'Vídeos', 'Palestras', 'Contato'];

const youtubeChannelUrl = 'https://www.youtube.com/@marcelomattoso';
const amazonSeriesUrl =
  'https://www.amazon.com.br/dp/B0H4WP2GH2?binding=kindle_edition&ref=dbs_dp_sirpi';
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const socialLinks = [
  { label: 'Amazon', mark: 'a', href: amazonSeriesUrl },
  { label: 'Instagram', mark: 'IG', href: 'https://www.instagram.com/mattoso900/' },
  { label: 'Facebook', mark: 'f', href: 'https://www.facebook.com/cafecommattoso/' },
  { label: 'YouTube', mark: 'YT', href: youtubeChannelUrl },
];

const books = [
  {
    title: 'Aquele que não tem palavra',
    volume: 'Livro 1',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/41qAw2ZWQSL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H75R15DS?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'A Parte Morta do Jardim',
    volume: 'Livro 2',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/41PC2vHXetL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H763KQLG?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'O Homem que Sabia Fugir',
    volume: 'Livro 3',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/31dVZRK+zIL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H75WV4NL?ref_=dbs_m_mng_rwt_calw_tkin_2&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'O lar que não cabia nela',
    volume: 'Livro 4',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/41j+YGZJTNL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H764LNXS?ref_=dbs_m_mng_rwt_calw_tkin_3&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'A estrada que nunca chegou',
    volume: 'Livro 5',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/312BdlxbJOL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H7Q57X74?ref_=dbs_m_mng_rwt_calw_tkin_4&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'O homem que rezava com a espada',
    volume: 'Livro 6',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/41A+n+b8NOL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0GX2WF6X2?ref_=dbs_m_mng_rwt_calw_tkin_5&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'O sonho que não era dele',
    volume: 'Livro 7',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/416hB6jUnwL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H94RVJLT?ref_=dbs_m_mng_rwt_calw_tkin_6&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'O homem que carregava seu milagre',
    volume: 'Livro 8',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/41eZ0NACyLL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0H94X7QZ3?ref_=dbs_m_mng_rwt_calw_tkin_7&storeType=ebooks',
    action: 'Ver na Amazon',
  },
  {
    title: 'O homem que procurava onde ficar',
    volume: 'Livro 9',
    tag: 'Crônicas do café, pão e milagre',
    image:
      'https://m.media-amazon.com/images/I/41rk3YCcEYL._PJku-sticker-v7,TopRight,0,-50._SY300_.jpg',
    href: 'https://www.amazon.com.br/gp/product/B0HCW6YQ5V?ref_=dbs_m_mng_rwt_calw_tkin_8&storeType=ebooks',
    action: 'Ver na Amazon',
  },
];

const videos = [
  {
    title: 'Trabalhar também é tentar ficar de pé',
    episode: 'Café, Pão e Milagre #10',
    date: '25 ago. 2026',
    image: 'https://i2.ytimg.com/vi/--EimCr6Zag/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=--EimCr6Zag',
  },
  {
    title: 'A mesa continua',
    episode: 'Café, Pão e Milagre #9',
    date: '21 ago. 2026',
    image: 'https://i2.ytimg.com/vi/mMG4Zr7RJMA/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=mMG4Zr7RJMA',
  },
  {
    title: 'Quando alguém senta do seu lado',
    episode: 'Café, Pão e Milagre #8',
    date: '19 ago. 2026',
    image: 'https://i2.ytimg.com/vi/u5z3a-HSd6A/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=u5z3a-HSd6A',
  },
  {
    title: 'O corpo lembra o caminho',
    episode: 'Café, Pão e Milagre #7',
    date: '14 ago. 2026',
    image: 'https://i3.ytimg.com/vi/bPWs-mpO3QY/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=bPWs-mpO3QY',
  },
  {
    title: 'A casa vazia também fala',
    episode: 'Café, Pão e Milagre #6',
    date: '12 ago. 2026',
    image: 'https://i3.ytimg.com/vi/6sThkenvjEc/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=6sThkenvjEc',
  },
  {
    title: 'Deus chega trabalhando',
    episode: 'Café, Pão e Milagre #5',
    date: '7 ago. 2026',
    image: 'https://i3.ytimg.com/vi/zuArzlOK2ZY/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=zuArzlOK2ZY',
  },
  {
    title: 'Primeiro meu jardim',
    episode: 'Café, Pão e Milagre #4',
    date: '5 ago. 2026',
    image: 'https://i4.ytimg.com/vi/sG4jRZX8vbA/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=sG4jRZX8vbA',
  },
  {
    title: 'Pessoas são seus próprios milagres',
    episode: 'Café, Pão e Milagre #3',
    date: '31 jul. 2026',
    image: 'https://i3.ytimg.com/vi/v-871-pakiU/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=v-871-pakiU',
  },
  {
    title: 'Eu amadureci, mas não quero endurecer',
    episode: 'Café, Pão e Milagre #2',
    date: '29 jul. 2026',
    image: 'https://i4.ytimg.com/vi/sUV14cb0I1w/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=sUV14cb0I1w',
  },
  {
    title: 'Não precisa chegar inteiro',
    episode: 'Café, Pão e Milagre #1',
    date: '24 jul. 2026',
    image: 'https://i4.ytimg.com/vi/gdDC0B6IcDY/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=gdDC0B6IcDY',
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
          <a
            href={link.href}
            key={link.label}
            aria-label={link.label}
            target="_blank"
            rel="noreferrer"
          >
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
            A série Kindle e os episódios do Café com Mattoso reunidos em uma
            mesa sobre fé simples, reconstrução e pequenos milagres cotidianos.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={amazonSeriesUrl} target="_blank" rel="noreferrer">
              <span aria-hidden="true" className="button-icon book-icon" />
              Ver na Amazon
            </a>
            <a className="button secondary" href={youtubeChannelUrl} target="_blank" rel="noreferrer">
              <span aria-hidden="true" className="button-icon play-icon" />
              Canal no YouTube
            </a>
          </div>
          <p className="hero-note">
            <span aria-hidden="true">+</span>
            Pessoas são seus próprios milagres.
          </p>
        </div>

        <div className="hero-media" aria-label="Marcelo Mattoso em estúdio">
          <img
            alt="Marcelo Mattoso segurando uma xícara de café ao lado de uma cafeteira"
            src={`${assetBase}/images/marcelo-cafe-hero.jpg`}
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
              alt="Marcelo Mattoso em uma pista de corrida ao amanhecer"
              src={`${assetBase}/images/marcelo-corrida-sobre.jpg`}
            />
          </figure>
        </div>

        <div className="section-divider" />

        <section id="livros">
          <SectionTitle label="Livros" />
          <p className="section-intro">
            Série Kindle com 9 livros, listada aqui na ordem original: o Livro 1
            aparece primeiro.
          </p>
          <div
            className="book-carousel"
            aria-label="Carrossel de livros da série Crônicas do café, pão e milagre"
          >
            {books.map((book) => (
              <article className="book-card" key={`${book.title}-${book.volume}`}>
                <div className="book-cover">
                  <img alt={`Capa de ${book.title}`} src={book.image} />
                  <span>{book.tag}</span>
                  <strong>{book.title}</strong>
                </div>
                <div className="book-body">
                  <h3>{book.title}</h3>
                  <p>{book.volume}</p>
                  <a href={book.href} target="_blank" rel="noreferrer">
                    {book.action}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        <section id="videos">
          <SectionTitle label="Vídeos" />
          <p className="section-intro">
            Vídeos do canal oficial em ordem de publicação, começando pelo mais recente.
          </p>
          <div
            className="video-carousel"
            aria-label="Carrossel com os 8 vídeos mais recentes do Café com Mattoso"
          >
            {videos.slice(0, 8).map((video) => (
              <article className="video-card" key={video.title}>
                <div className="video-thumb">
                  <img alt={`Thumbnail do vídeo ${video.title}`} src={video.image} />
                  <span className="episode">{video.episode}</span>
                  <span className="duration">{video.date}</span>
                </div>
                <div className="video-body">
                  <h3>{video.title}</h3>
                  <a href={video.href} target="_blank" rel="noreferrer">
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
          <ContactModal />
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
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Contato</h3>
          <a href="mailto:mmattoso900@gmail.com">mmattoso900@gmail.com</a>
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
