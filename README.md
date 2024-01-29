## Tauri Snap Packager
Snap packager for [Tauri](https://tauri.studio).

### How To
1. Add `tauri-snap-packager` to your tauri project root.
```shell
npm install --save-dev https://github.com/h3poteto/tauri-snap-packager#main
# Or with yarn
yarn add --dev https://github.com/h3poteto/tauri-snap-packager#main
```

2. Run [tauri build](https://tauri.studio/en/docs/usage/development/publishing).

3. Add the build script to package.json. (This step can be skipped if using `yarn`)
```json
  "scripts": {
    "tauri-snap-packager": "tauri-snap-packager"
  }
```

4. Package!
```shell
npm run tauri-snap-packager
# Or with yarn
yarn tauri-snap-packager
```

****
