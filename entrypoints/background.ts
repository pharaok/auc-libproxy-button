export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchAZList") {
      fetch("https://libguides.aucegypt.edu/process/az/dblist")
        .then((response) => response.json())
        .then((data) => sendResponse({ success: true, data }))
        .catch((error) =>
          sendResponse({ success: false, error: error.message }),
        );

      return true;
    }
  });
});
