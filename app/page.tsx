import Image from 'next/image';
import ProjectFilters from './ProjectFilters';
import ContactModal from './ContactModal';
import { Footer, Header } from './SiteChrome';
import { publicAsset } from './public-asset';
import { pageMetadata } from './seo';

export const metadata = pageMetadata({ title: 'A Forja', description: 'A Forja é um hub de projetos de tecnologia, conteúdo e entretenimento criado por Marcelo Mattoso.' });

export default function Home() { return <main id="main-content" className="theme--forja forja-hub"><Header />
  <section className="hub-hero" id="a-forja"><div className="hub-hero-copy"><p className="eyebrow">A Forja</p><h1>Ideias entram.<br /><em>Coisas ganham forma.</em></h1><p>Um hub para tecnologia, conteúdo, entretenimento e projetos transformados em algo real.</p><div className="actions"><a className="button primary" href="#projetos">Explorar projetos</a><a className="button quiet" href="#sobre">Conhecer a Forja</a></div></div><div className="hub-mark"><Image className="hub-hero-art" src={publicAsset('images/brand/forja-logo-fire-dark.png')} alt="Logo A Forja em metal e fogo" width={1254} height={1254} priority /></div></section>
  <section className="hub-projects" id="projetos"><div className="section-intro"><p className="eyebrow">Projetos</p><h2>Uma origem. Muitas formas de criar.</h2><p>Cada projeto segue sua própria linguagem. A Forja é o lugar que os reúne.</p></div><ProjectFilters /></section>
  <section className="hub-about" id="sobre"><div><p className="eyebrow">Sobre a A Forja</p><h2>Fazer, testar, construir e compartilhar.</h2></div><div><p>A Forja é o espaço onde ideias deixam de ser apenas intenção. Projetos diferentes, identidades diferentes, uma mesma origem.</p><p>Um hub criado por Marcelo Mattoso para dar forma a software, histórias, conversas e experiências.</p><ContactModal /></div></section><Footer />
</main>; }
