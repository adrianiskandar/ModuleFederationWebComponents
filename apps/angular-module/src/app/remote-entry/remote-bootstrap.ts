import 'zone.js'
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RemoteEntryModule } from './entry.module';
import { environment } from '../../environments/environment';
import pkg from '../../../../../package.json';

declare global {
  interface Window {
    platform: any;
  }
}

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(RemoteEntryModule)
//   .catch((err) => console.error(err));

const ngVersion = pkg.dependencies['@angular/core'];
window.platform = window.platform || {};
let platform = window.platform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  window.platform[ngVersion] = platform;
}
platform.bootstrapModule(RemoteEntryModule).catch((err: any) => console.error(err));

export { RemoteEntryModule };
