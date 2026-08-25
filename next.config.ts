import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'cafe-com-mattoso-site';

const nextConfig: NextConfig = isGitHubPages
  ? {
      assetPrefix: `/${repositoryName}/`,
      basePath: `/${repositoryName}`,
      images: {
        unoptimized: true,
      },
      output: 'export',
      trailingSlash: true,
    }
  : {};

export default nextConfig;
