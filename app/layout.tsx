import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = { title: { default: 'A Forja | Marcelo Mattoso', template: '%s | A Forja' }, description: 'Projetos de tecnologia, conteúdo e entretenimento criados por Marcelo Mattoso.', openGraph: { title: 'A Forja | Marcelo Mattoso', description: 'Tecnologia, conteúdo, entretenimento e projetos em construção.', locale: 'pt_BR', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>; }
