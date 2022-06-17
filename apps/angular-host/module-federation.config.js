module.exports = {
  name: 'angular-host',
  remotes: [
    ['angular-module', 'http://localhost:4201/'],
    ['react-module', 'http://localhost:4203/remoteEntry.js'],
  ],
};
