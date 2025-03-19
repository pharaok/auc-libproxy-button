import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  manifest: {
    host_permissions: ["https://libguides.aucegypt.edu/process/az/dblist"],
  },
});
