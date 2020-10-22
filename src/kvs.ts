import { kvsEnvStorage } from "@kvs/env";

(async () => {
    type Schema = {
        key: string;
    };
    const storage = await kvsEnvStorage<Schema>({
        name: "example",
        version: 1
    });
    await storage.set("key", "value");
    const value = storage.get("key");
    console.log(typeof value === "string"); // => true
})();
