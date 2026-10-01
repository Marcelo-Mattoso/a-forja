/** Resolves files from public/ in both the local server and GitHub Pages. */
export function publicAsset(path: string) {
  const normalizedPath = path.replace(/^\/+/, '');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return `${basePath}/${normalizedPath}`;
}
