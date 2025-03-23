export function toLibProxyUrl(url: string): string {
  const URLRegex = /^https:\/\/(.*?)(\/.*)/;
  const match = url.match(URLRegex)!;
  const domain = match[1];
  const path = match[2];
  return `https://${domain.replace(/\./g, "-")}.libproxy.aucegypt.edu${path}`;
}
