import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'a-forja';
const basePath = isGitHubPages ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marcelo-mattoso.github.io/a-forja/',
  },
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        assetPrefix: `${basePath}/`,
        basePath,
        images: { unoptimized: true },
        output: 'export',
      }
    : {}),
};

export default nextConfig;
