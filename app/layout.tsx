import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteUrl } from './seo';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'A Forja', template: '%s | A Forja' },
  description: 'Projetos de tecnologia, conteúdo e entretenimento criados por Marcelo Mattoso.',
  applicationName: 'A Forja',
  icons: { icon: '/images/brand/forja-logo-white.png', apple: '/images/brand/forja-logo-white.png' },
  openGraph: { title: 'A Forja', description: 'Tecnologia, conteúdo, entretenimento e projetos em construção.', locale: 'pt_BR', type: 'website', siteName: 'A Forja', images: [{ url: '/images/brand/forja-logo-white.png', width: 730, height: 680, alt: 'A Forja' }] },
  twitter: { card: 'summary_large_image', images: ['/images/brand/forja-logo-white.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'A Forja',
    url: siteUrl.toString(), description: 'Projetos de tecnologia, conteúdo e entretenimento criados por Marcelo Mattoso.',
  };
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'A Forja', url: siteUrl.toString(), inLanguage: 'pt-BR' };
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    {children}
  </body></html>;
}
