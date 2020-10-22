import localforage from "localforage";

(async () => {
    await localforage.setItem<string>("key", "value");
    const value = localforage.getItem<string>("key");
    console.log(typeof value === "string"); // => true
})();
