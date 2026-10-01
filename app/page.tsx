/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import ContactModal from './ContactModal';
import ProjectCard from './ProjectCard';
import { Footer, Header } from './SiteChrome';
import { projects } from './projects-data';
import { publicAsset } from './public-asset';

const categories = [['Tecnologia', 'Produtos, software, automação e experiências em construção.'], ['Conteúdo', 'Conversas, textos, vídeos e encontros que mantêm pessoas no centro.'], ['Entretenimento', 'Jogos, livros, HQs e universos para explorar histórias.']];

export default function Home() {
  const featuredProject = projects.find((project) => project.featured)!;
  const selectedProjects = [featuredProject, ...projects.filter((project) => project.id !== featuredProject.id).slice(0, 3)];
  return <main className="theme--forja"><Header />
    <section className="page-hero wrap forja-hero forja-home-hero"><p className="eyebrow">por Marcelo Mattoso</p><h1>A Forja</h1><p className="forja-statement">Ideias, tecnologia, histórias e pessoas em movimento.</p><p className="lede">A Forja reúne projetos diferentes que começam com curiosidade e ganham forma em software, conversas, jogos, livros e experiências.</p><div className="actions"><Link className="button primary" href="/projetos">Conhecer os projetos</Link><Link className="button quiet" href="/cafe-com-mattoso">Entrar no Café com Mattoso</Link></div></section>
    <section className="wrap section focus-project"><div><p className="eyebrow">O que estamos construindo agora</p><span className="status status--em-desenvolvimento">Em desenvolvimento</span><h2>{featuredProject.name}</h2><p>{featuredProject.description}</p><Link className="button primary" href={featuredProject.internalRoute}>Conhecer o projeto</Link></div><div className="focus-art" aria-hidden="true"><span>CRM</span></div></section>
    <section className="wrap section"><div className="section-heading"><p className="eyebrow">Projetos da Forja</p><h2>Uma mesma oficina, caminhos diferentes.</h2><Link className="text-link" href="/projetos">Ver todos os projetos <b>→</b></Link></div><div className="projects-grid projects-grid--home">{selectedProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section>
    <section className="wrap section categories"><div><p className="eyebrow">Categorias</p><h2>Para encontrar sem separar o que construímos.</h2></div><div>{categories.map(([name, description]) => <article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div></section>
    <section className="wrap section cafe-feature"><div><p className="eyebrow">Café com Mattoso</p><h2>Uma conversa que continua.</h2><p>Vídeos, textos, reflexões, palestras e histórias sobre trabalho, tecnologia, vida e as escolhas que permanecem humanas.</p><Link className="button quiet" href="/cafe-com-mattoso">Visitar o Café com Mattoso</Link></div><img src={publicAsset('images/marcelo-cafe-hero.jpg')} alt="Marcelo Mattoso com uma xícara de café" /></section>
    <section className="wrap section about" id="sobre"><div><p className="eyebrow">Sobre</p><h2>Construir sem deixar pessoas desaparecerem no processo.</h2></div><div><p>A Forja é o espaço onde Marcelo Mattoso reúne a experiência com sistemas, equipes, histórias e decisões para transformar ideias em projetos visitáveis.</p><p>Não é um rótulo para uma única atividade. É uma forma de seguir criando, testando e compartilhando o que está tomando forma.</p></div></section>
    <section className="wrap section contact-call" id="contato"><div><p className="eyebrow">Contato</p><h2>Vamos conversar sobre o que está ganhando forma.</h2></div><div><p>Conheça os projetos, acompanhe os próximos passos ou inicie uma conversa.</p><ContactModal /></div></section><Footer />
  </main>;
}