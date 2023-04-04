a template for npm library developer

if you want use it, you should do:

1. modify vite.config.js `build` object
    - build.lib
    - rollupOptions
2. modify package.json fields:
    - name, author, version, homepage, repository, bugs, keywords
    - main, module, unpkg, exports
3. modify ./src/entry.js to custom install logic
