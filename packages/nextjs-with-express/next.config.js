const withTranspileModules = require('next-plugin-transpile-modules');

module.exports = withTranspileModules({
  transpileModules: ['some-es6-package']
});
