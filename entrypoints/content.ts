export default defineContentScript({
  matches: ["<all_urls>"],
  async main() {
    const URLRegex = /^https:\/\/(.*?)(\/.*)/;
    const match = window.location.href.match(URLRegex)!;
    const domain = match[1];
    const path = match[2];
    let URLs: string[] = [];

    await browser.runtime
      .sendMessage({ action: "fetchAZList" })
      .then((response) => {
        const div = document.createElement("div");
        div.innerHTML = response.data.data.html;
        div.querySelectorAll("a").forEach((a) => {
          const proxyRegex =
            /^https:\/\/libproxy.aucegypt.edu\/login\?url=https?:\/\/(.*?)\/?$/;
          const match = a.href.match(proxyRegex);
          if (match) URLs.push(match[1]);
        });
      });
    if (URLs.some((u) => (domain + path).startsWith(u))) {
      const a = document.createElement("a");
      setupLibProxyButton(
        a,
        `https://${domain.replace(/\./g, "-")}.libproxy.aucegypt.edu${path}`,
      );
      document.body.appendChild(a);
    }
  },
});
