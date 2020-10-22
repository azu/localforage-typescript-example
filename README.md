# localforage-typescript-example

[localForage](https://github.com/localForage/localForage) and [@kvs/env](https://github.com/azu/kvs) example on TypeScript

[localForage](https://github.com/localForage/localForage): generics key

```ts
import localforage from "localforage"

(async () => {
    await localforage.setItem<string>('key', 'value')
    const value = localforage.getItem<string>('key')
    console.log(typeof value === "string"); // => true
})();
```

[@kvs/env](https://github.com/azu/kvs): use Schema type 

```ts
import { kvsEnvStorage } from "@kvs/env"

(async () => {
    type Schema = {
        key: string
    }
    const storage = await kvsEnvStorage<Schema>({
        name: "example",
        version: 1
    });
    await storage.set("key", "value");
    const value = storage.get("key");
    console.log(typeof value === "string"); // => true
})();

```


## Changelog

See [Releases page](https://github.com/azu/localforage-typescript-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/localforage-typescript-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
