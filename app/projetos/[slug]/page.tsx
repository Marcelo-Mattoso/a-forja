import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer, Header } from '../../SiteChrome';
import { getProject, projects } from '../../projects-data';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => { const project = getProject(slug); return project ? { title: project.name, description: project.shortDescription } : {}; });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <main className="theme--forja"><Header />
    <section className="page-hero wrap project-detail-hero">
      <div><p className="eyebrow">{project.category}</p><span className={`status status--${project.status.toLowerCase().replaceAll(' ', '-')}`}>{project.status}</span><h1>{project.name}</h1><p>{project.shortDescription}</p></div>
      {project.coverImage ? <img src={project.coverImage} alt="" /> : <div className="project-detail-art" aria-hidden="true">{project.name.slice(0, 1)}</div>}
    </section>
    <section className="wrap section project-description"><div><p className="eyebrow">Sobre o projeto</p><h2>Uma ideia em construção.</h2></div><div><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.links?.map((link) => <Link className="button primary" href={link.href} key={link.href}>{link.label}</Link>)}</div></section>
    <section className="wrap section project-back"><Link className="text-link" href="/projetos">Ver todos os projetos <b>→</b></Link></section>
    <Footer />
  </main>;
}
