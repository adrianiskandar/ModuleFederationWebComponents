import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import pkg from '../../../package.json';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

const ngVersion = pkg.dependencies['@angular/core'];
window.platform = window.platform || {};
let platform = window.platform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  window.platform[ngVersion] = platform;
}
platform.bootstrapModule(AppModule).catch((err: any) => console.error(err));
