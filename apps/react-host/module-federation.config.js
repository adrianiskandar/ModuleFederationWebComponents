module.exports = {
  name: 'react-host',
  remotes: [
    ['angular-module', 'http://localhost:4201/remoteEntry.mjs'],
    ['react-module', 'http://localhost:4203/'],
  ],};
