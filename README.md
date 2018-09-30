# nextjs-esm-example
An example that uses [ESM](https://github.com/standard-things/esm#readme) with [Next.js](https://nextjs.org/) and [Lerna](https://lernajs.io/).

The idea behind this is to show a simple working example of how you can define multiple packages for a single project, and import ES6 modules from your packages (rather than be restricted to CommonJS import and export).

To run it:

```
lerna bootstrap
cd cd packages/nextjs-with-express/
npm run dev
```

Then access http://localhost:3000/

The demo just shows "Importing an ES6 module in Next.js via ESM worked!", but this is interesting because it's imported directly as an ES6 module from within `node_modules` (Lerna-symlinked). This is enabled by `esm`.

Draws from [Next.js Custom Server with Express example](https://github.com/zeit/next.js/blob/canary/examples/custom-server-express).

Related thread: [Next.js: Add support to transpile modules inside node_modules](https://github.com/zeit/next.js/issues/706#issuecomment-399356210).
