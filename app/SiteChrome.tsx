import Link from 'next/link';
import { contactEmail, socialLinks } from './site-data';
export type SiteTheme = 'cafe' | 'forja';
type ChromeProps = { theme?: SiteTheme };
export function Header({ theme = 'forja' }: ChromeProps) {
  const navItems = [['Início', '/'], ['Projetos', '/projetos'], ['Café com Mattoso', '/cafe-com-mattoso'], ['Sobre', '/#sobre'], ['Contato', '/#contato']];
  return <header className={`topbar theme--${theme}`}><Link className="brand" href="/"><span>A Forja</span><small>por Marcelo Mattoso</small></Link><nav aria-label="Navegação principal">{navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></header>;
}
export function Footer({ theme = 'forja' }: ChromeProps) {
  return <footer className={`footer theme--${theme}`}><div><p className="eyebrow">A Forja</p><p className="footer-line">Projetos para construir,<br />contar e compartilhar.</p></div><div className="footer-links"><Link href="/projetos">Projetos</Link><Link href="/cafe-com-mattoso">Café com Mattoso</Link><Link href="/historias">Histórias</Link><Link href="/palestras">Palestras</Link><a href={`mailto:${contactEmail}`}>Contato</a>{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>)}</div><small>© 2026 Marcelo Mattoso</small></footer>;
}
