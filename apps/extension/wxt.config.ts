import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  manifest: ({ browser }) => {
    console.log(browser);
    return {
      name: "AUC Library Proxy Button",
      permissions: ["tabs", "storage"],
      host_permissions: ["https://libguides.aucegypt.edu/process/az/dblist"],
      content_security_policy: {
        extension_pages:
          "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'; style-src 'self' 'unsafe-inline';",
        // sandbox: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'",
      },
      browser_specific_settings: {
        gecko: {
          id: "{9bb6a393-44e6-4795-a43e-4e919424c53f}",
          update_url: "https://auc-libproxy.pharaok.com/firefox-updates.json",
        },
      },
    };
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
