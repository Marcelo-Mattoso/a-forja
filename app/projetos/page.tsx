import type { Metadata } from 'next';
import { Footer, Header } from '../SiteChrome';
import ProjectFilters from './ProjectFilters';

export const metadata: Metadata = { title: 'Projetos', description: 'Projetos de tecnologia, conteúdo e entretenimento criados pela A Forja.' };

export default function ProjectsPage() {
  return <main className="theme--forja"><Header />
    <section className="page-hero wrap projects-hero"><p className="eyebrow">A Forja</p><h1>Projetos que ganham forma.</h1><p>Tecnologia, conteúdo e entretenimento são formas de organizar o que construímos — todos os projetos pertencem à A Forja.</p></section>
    <section className="wrap section"><ProjectFilters /></section>
    <Footer />
  </main>;
}
