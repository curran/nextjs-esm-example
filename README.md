# nextjs-esm-example
An example that uses ESM with Next.js and Lerna.

To run it:

```
lerna bootstrap
cd cd packages/nextjs-with-express/
npm run dev
```

Then access http://localhost:3000/

The demo just shows "", but this is interesting because it's imported directly asn an ES6 module from within `node_modules` (Lerna-symlinked). This is enabled by `esm`.

Draws from [Next.js Custom Server with Express example](https://github.com/zeit/next.js/blob/canary/examples/custom-server-express).

Related thread: [Next.js: Add support to transpile modules inside node_modules](https://github.com/zeit/next.js/issues/706#issuecomment-399356210).
