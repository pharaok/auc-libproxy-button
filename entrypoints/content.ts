import { getLibProxyService } from "@/utils/service";

const libProxyService = getLibProxyService();

export default defineContentScript({
  matches: ["<all_urls>"],
  async main() {
    const URLRegex = /^https:\/\/(.*?)(\/.*)/;
    const match = window.location.href.match(URLRegex)!;
    const domain = match[1];
    const path = match[2];
    let URLs: string[] = [];

    const azList = await libProxyService.fetchAZList();
    const div = document.createElement("div");
    div.innerHTML = azList.data.html;
    div.querySelectorAll("a").forEach((a) => {
      const proxyRegex =
        /^https:\/\/libproxy.aucegypt.edu\/login\?url=https?:\/\/(.*?)\/?$/;
      const match = a.href.match(proxyRegex);
      if (match) URLs.push(match[1]);
    });
    if (URLs.some((u) => (domain + path).startsWith(u))) {
      const a = document.createElement("a");
      setupLibProxyButton(a, toLibProxyUrl(window.location.href));
      document.body.appendChild(a);
    }
  },
});
