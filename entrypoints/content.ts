export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    console.log("Hello content.");
    browser.runtime.sendMessage({ action: "fetchAZList" }).then((response) => {
      console.log("AZ List:", response);
    });
  },
});
