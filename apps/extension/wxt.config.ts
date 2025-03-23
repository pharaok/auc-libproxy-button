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
        sandbox: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'",
      },
      browser_specific_settings: {
        gecko: {
          id: "{65402aac-3690-4286-9b32-5e5b6412055d}",
        },
      },
    };
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
