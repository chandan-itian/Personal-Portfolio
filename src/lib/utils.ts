export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (basePath && !path.startsWith(basePath)) {
    return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  return path;
}
