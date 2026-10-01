import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'a-forja';
const basePath = isGitHubPages ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGitHubPages
    ? {
        assetPrefix: `${basePath}/`,
        basePath,
        images: { unoptimized: true },
        output: 'export',
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;