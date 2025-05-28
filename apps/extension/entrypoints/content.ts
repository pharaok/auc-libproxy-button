import { toLibProxyUrl } from "shared/utils/toLibProxyUrl.js";
import { getLibProxyService } from "@/utils/service";
import buttonCss from "@/components/libProxyButton.css?raw";

const libProxyService = getLibProxyService();

export default defineContentScript({
  matches: ["<all_urls>"],
  async main() {
    const URLRegex = /^https:\/\/(.*?)(\/.*)/;
    const match = window.location.href.match(URLRegex)!;
    const domain = match[1];
    const path = match[2];
    let domains: string[] = [];

    // Fetch the AUC Library's AZ List
    const azList = await libProxyService.fetchAZList();
    const div = document.createElement("div");
    div.innerHTML = azList.data.html;
    div.querySelectorAll("a").forEach((a) => {
      const proxyRegex = /^https:\/\/libproxy.aucegypt.edu\/login\?url=(.*)/;
      const match = a.href.match(proxyRegex);
      if (match) {
        const domainRegex = /^https?:\/\/([^\/\/:]+)/;
        const domain = match[1].match(domainRegex)?.[1];
        if (domain) domains.push(domain);
      }
    });

    // Fetch custom whitelist
    const whitelist = await libProxyService.fetchWhitelist();
    domains = domains.concat(whitelist);

    if (domains.some((u) => (domain + path).startsWith(u))) {
      console.log("Matched URL in the AZ list.");
      const shadowHost = document.createElement("div");
      const shadowRoot = shadowHost.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = buttonCss;
      shadowRoot.appendChild(style);

      const a = document.createElement("a");
      setupLibProxyButton(a, toLibProxyUrl(window.location.href));
      shadowRoot.appendChild(a);

      document.body.appendChild(shadowHost);
    }
  },
});
