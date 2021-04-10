const packageJson = require('../../package.json');

export const environment = {
  appName: 'Trello',
  envName: 'PROD',
  production: true,
  test: false,
  versions: {
    appVersion: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    eslint: packageJson.devDependencies['eslint']
  },
  imagenApi: 'https://randomuser.me/api/portraits/med/men/',
  imagenNameApi: 'https://ui-avatars.com/api/'
};
