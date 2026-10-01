/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import ContactModal from './ContactModal';
import ProjectCard from './ProjectCard';
import { Footer, Header } from './SiteChrome';
import { projects } from './projects-data';
import { publicAsset } from './public-asset';
import { pageMetadata } from './seo';

export const metadata = pageMetadata({ title: 'A Forja', description: 'A Forja reúne projetos de tecnologia, conteúdo e entretenimento criados por Marcelo Mattoso.' });

const categories = [['Tecnologia', 'Software, ferramentas e experimentos.'], ['Conteúdo', 'Conversas, textos e ideias em movimento.'], ['Entretenimento', 'Jogos, livros, HQs e outros mundos.']];

export default function Home() {
  const featuredProject = projects.find((project) => project.featured)!;
  const selectedProjects = [featuredProject, ...projects.filter((project) => project.id !== featuredProject.id).slice(0, 3)];
  return <main id="main-content" className="theme--forja"><Header />
    <section className="page-hero wrap forja-hero forja-home-hero"><p className="eyebrow">A Forja · por Marcelo Mattoso</p><h1>A Forja</h1><p className="forja-statement">Projetos de tecnologia, conteúdo e entretenimento.</p><p className="lede">Há coisas sendo construídas aqui.</p><div className="actions"><Link className="button primary" href="/projetos">Ver projetos</Link><a className="button quiet" href="#contato">Entrar em contato</a></div></section>
    <section className="wrap section focus-project"><div><p className="eyebrow">O que estamos construindo agora</p><span className={`status status--${featuredProject.status.toLowerCase().replaceAll(' ', '-')}`}>{featuredProject.status}</span><h2>{featuredProject.name}</h2><p>{featuredProject.shortDescription}</p><Link className="button primary" href={featuredProject.internalRoute}>Conhecer o CRM</Link></div><div className="focus-art" aria-hidden="true"><span>{featuredProject.name}</span></div></section>
    <section className="wrap section"><div className="section-heading"><p className="eyebrow">Projetos da Forja</p><h2>Coisas em construção.</h2><Link className="text-link" href="/projetos">Ver todos os projetos <b>→</b></Link></div><div className="projects-grid projects-grid--home">{selectedProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section>
    <section className="wrap section categories"><div><p className="eyebrow">Categorias</p><h2>Um lugar para projetos diferentes.</h2></div><div>{categories.map(([name, description]) => <article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div></section>
    <section className="wrap section cafe-feature"><div><p className="eyebrow">Projeto de conteúdo da A Forja</p><h2>Café com Mattoso</h2><p>Vídeos, textos e conversas sobre trabalho, tecnologia, vida e escolhas.</p><Link className="button quiet" href="/cafe-com-mattoso">Visitar o Café</Link></div><img src={publicAsset('images/marcelo-cafe-hero.jpg')} alt="Marcelo Mattoso com uma xícara de café" decoding="async" loading="lazy" /></section>
    <section className="wrap section about" id="sobre"><div><p className="eyebrow">Sobre</p><h2>Ideias que viram projetos.</h2></div><div><p>A Forja reúne o trabalho de Marcelo Mattoso com tecnologia, histórias e produtos.</p><p>Um lugar para fazer, testar e compartilhar.</p></div></section>
    <section className="wrap section contact-call" id="contato"><div><p className="eyebrow">Contato</p><h2>Vamos conversar.</h2></div><div><p>Para acompanhar, colaborar ou começar uma ideia.</p><ContactModal /></div></section><Footer />
  </main>;
}
