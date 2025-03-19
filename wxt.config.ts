import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  manifest: {
    permissions: ["tabs"],
    host_permissions: ["https://libguides.aucegypt.edu/process/az/dblist"],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
