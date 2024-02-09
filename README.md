## Tauri Snap Packager
This is a fork of [tauri-snap-packager](https://github.com/harshkhandeparkar/tauri-snap-packager).
Snap packager for [Tauri](https://tauri.app/).

### How To
1. Add `tauri-snap-packager` to your tauri project root.
```shell
$ npm install --save-dev @h3poteto/tauri-snap-packager@0.2.0
# Or with yarn
$ yarn add --dev @h3poteto/tauri-snap-packager@0.2.0
```

2. Run [tauri build](https://tauri.app/v1/api/cli/#build).

3. Add the build script to package.json. (This step can be skipped if using `yarn`)
```json
  "scripts": {
    "tauri-snap-packager": "tauri-snap-packager"
  }
```

4. Package!
```shell
$ npm run tauri-snap-packager
# Or with yarn
$ yarn tauri-snap-packager
```

