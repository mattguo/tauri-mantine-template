# Tauri 2 + React 18.3.1 + Mantine 8.2.8 + TypeScript

This template should help get you started developing with Tauri 2, React 18.3.1, Mantine 8.2.8 and TypeScript in Vite.

I tested this with cursor IDE on Mac OS, but it should also work on other platforms.

## Run

* `pnpm install` to install deps
* `pnpm tauri:dev` to boot up the App

## Debug


### Common commands

```
pnpm lint
```

Add see more in package.json

### Debug React UI

can install the standalone react developer tools

```
npx react-devtools
```

And then as instruction, uncomment this line in index.html.
```
<script src="http://localhost:8097"></script>
```

See more in https://github.com/facebook/react/tree/main/packages/react-devtools#usage-with-react-dom
