import Image from 'next/image';

const featuredVideos = [
  {
    title: 'Conversas de café sobre política, cultura e cotidiano',
    type: 'Vídeo',
    meta: 'Série principal',
    accent: 'bg-[#b4472e]',
  },
  {
    title: 'Cortes para acompanhar os melhores momentos',
    type: 'Cortes',
    meta: 'Publicação contínua',
    accent: 'bg-[#176d6d]',
  },
  {
    title: 'Entrevistas e encontros especiais',
    type: 'Especial',
    meta: 'Acervo em construção',
    accent: 'bg-[#d8a332]',
  },
];

const books = [
  'Livros publicados por Marcelo Mattoso',
  'Indicações de leitura citadas nos episódios',
  'Textos, artigos e materiais de apoio',
];

const collections = [
  { label: 'Vídeos', count: '00' },
  { label: 'Livros', count: '00' },
  { label: 'Textos', count: '00' },
  { label: 'Agenda', count: '00' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#231f1a]">
      <header className="border-b border-[#ded0bf] bg-[#fffaf2]/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a className="flex items-center gap-3" href="#" aria-label="Café com Mattoso">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#231f1a] text-sm font-bold text-[#fffaf2]">
              CM
            </span>
            <span className="text-base font-semibold">
              Café com Mattoso
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f5144] sm:flex">
            <a href="#videos">Vídeos</a>
            <a href="#livros">Livros</a>
            <a href="#acervo">Acervo</a>
          </nav>
          <a
            className="rounded-md bg-[#176d6d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#125757]"
            href="mailto:contato@cafecommattoso.com.br"
          >
            Contato
          </a>
        </div>
      </header>

      <section className="border-b border-[#ded0bf]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase text-[#8c5c2f]">
              Acervo digital
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Café com Mattoso em um só lugar.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f5144]">
              Um ponto de encontro para reunir episódios, cortes, livros,
              textos, indicações e tudo o que fizer parte da conversa.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-[#b4472e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#963a28]"
                href="#videos"
              >
                Ver vídeos
              </a>
              <a
                className="rounded-md border border-[#8c5c2f] px-5 py-3 text-sm font-bold text-[#5f3621] transition hover:bg-[#eadbc8]"
                href="#livros"
              >
                Explorar livros
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[#d7c6b2] bg-[#2d2720] shadow-[0_24px_60px_rgb(43_35_27/18%)]">
            <Image
              alt="Mesa com café, livros e equipamento de gravação"
              className="object-cover opacity-75"
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(35_31_26/82%),rgb(35_31_26/22%))]" />
            <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
              <p className="mb-3 text-sm font-semibold uppercase text-[#f5cf86]">
                Primeira versão
              </p>
              <h2 className="max-w-md text-3xl font-bold leading-tight">
                A casa inicial para organizar conteúdo, memória e próximos lançamentos.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="acervo" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-4">
          {collections.map((item) => (
            <div
              className="rounded-md border border-[#ded0bf] bg-[#fffaf2] p-5"
              key={item.label}
            >
              <p className="text-3xl font-bold">{item.count}</p>
              <p className="mt-1 text-sm font-semibold uppercase text-[#8c5c2f]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="videos" className="bg-[#fffaf2]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#8c5c2f]">
                Vídeos
              </p>
              <h2 className="mt-2 text-3xl font-bold">Destaques para publicar</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#5f5144]">
              Esta área já nasce preparada para receber embeds, thumbnails do
              YouTube, playlists e cortes organizados por tema.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredVideos.map((video) => (
              <article
                className="overflow-hidden rounded-md border border-[#ded0bf] bg-white"
                key={video.title}
              >
                <div className={`${video.accent} aspect-video`} />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase text-[#8c5c2f]">
                    {video.type}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{video.title}</h3>
                  <p className="mt-4 text-sm text-[#5f5144]">{video.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="livros" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-[#8c5c2f]">
            Biblioteca
          </p>
          <h2 className="mt-2 text-3xl font-bold">Livros, leituras e referências</h2>
          <p className="mt-4 leading-7 text-[#5f5144]">
            A primeira estrutura deixa espaço para capas, sinopses, links de
            compra, resenhas e materiais complementares.
          </p>
        </div>

        <div className="grid gap-3">
          {books.map((book, index) => (
            <article
              className="grid grid-cols-[64px_1fr] items-center gap-4 rounded-md border border-[#ded0bf] bg-[#fffaf2] p-4"
              key={book}
            >
              <span className="grid h-16 w-16 place-items-center rounded-md bg-[#231f1a] text-lg font-bold text-[#f5cf86]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-bold">{book}</h3>
                <p className="mt-1 text-sm text-[#5f5144]">
                  Placeholder editorial para substituir pelos itens reais.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#ded0bf] bg-[#231f1a] text-[#fffaf2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm">
            Café com Mattoso - vídeos, livros e conversas reunidos.
          </p>
          <p className="text-sm text-[#d7c6b2]">Site em construção editorial.</p>
        </div>
      </footer>
    </main>
  );
}
