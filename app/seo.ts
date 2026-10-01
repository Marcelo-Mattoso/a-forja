import type { Metadata } from 'next';

/** One public origin keeps canonicals and social metadata portable between hosts. */
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marcelo-mattoso.github.io/a-forja/');

function absoluteUrl(path: string) { return new URL(path === '/' ? '' : path.replace(/^\//, ''), siteUrl).toString(); }

type PageMetadataInput = { title: string; description: string; path?: string };

export function pageMetadata({ title, description, path = '/' }: PageMetadataInput): Metadata {
  const canonicalPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(canonicalPath) },
    openGraph: { title: `${title} | A Forja`, description, url: absoluteUrl(canonicalPath), locale: 'pt_BR', type: 'website', siteName: 'A Forja' },
    twitter: { card: 'summary', title: `${title} | A Forja`, description },
  };
}

