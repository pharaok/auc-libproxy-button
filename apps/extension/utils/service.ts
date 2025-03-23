import { defineProxyService } from "@webext-core/proxy-service";

class LibProxyService {
  async fetchAZList(): Promise<any> {
    const lastFetched = await storage
      .getMeta<{ lastFetched: number }>("local:azList")
      .then((meta) => meta.lastFetched);
    if (
      lastFetched &&
      new Date().getTime() - lastFetched < 1000 * 60 * 60 * 24
    ) {
      const azList = await storage.getItem("local:azList");
      return azList;
    }

    const azList = fetch("https://libguides.aucegypt.edu/process/az/dblist")
      .then((response) => response.json())
      .then(async (data) => {
        await storage.setItem("local:azList", data);
        await storage.setMeta("local:azList", {
          lastFetched: Date.now(),
        });
        return data;
      })
      .catch((error) => console.error("Error fetching AZ list", error));

    return azList;
  }
}

export const [registerLibProxyService, getLibProxyService] = defineProxyService(
  "LibProxyService",
  () => new LibProxyService(),
);
