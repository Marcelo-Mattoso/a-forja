/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { contactEmail, socialLinks } from './site-data';
import { publicAsset } from './public-asset';

export function BrandMark({ compact = false }: { compact?: boolean }) { return <img className={compact ? 'brand-mark brand-mark--compact' : 'brand-mark'} src={publicAsset('images/brand/forja-logo-white.png')} alt="A Forja" />; }
export function Header() { return <><a className="skip-link" href="#main-content">Pular para o conteúdo</a><header className="topbar"><Link className="brand" href="/" aria-label="A Forja, início"><BrandMark compact /></Link><nav aria-label="Navegação principal"><Link href="/#a-forja">A Forja</Link><Link href="/#projetos">Projetos</Link><Link href="/#sobre">Sobre</Link></nav></header></>; }
export function Footer() { return <footer className="footer"><div><BrandMark compact /><p className="footer-line">Ideias que entram.<br />Coisas que ganham forma.</p></div><div className="footer-links"><Link href="/#projetos">Projetos</Link><Link href="/#sobre">Sobre</Link><a href={`mailto:${contactEmail}`}>Contato</a></div><div className="footer-links footer-socials">{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>)}</div><small>© 2026 A Forja. Todos os direitos reservados.</small></footer>; }
