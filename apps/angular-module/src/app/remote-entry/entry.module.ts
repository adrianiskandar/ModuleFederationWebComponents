import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

import { RemoteEntryComponent } from './entry.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { MaterialComponent } from '../material/material.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    HomeComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'angular-module',
        component: HomeComponent,
      },
      {
        path: 'angular-module/material',
        component: MaterialComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const webComponent = createCustomElement(RemoteEntryComponent, {
      injector: this.injector,
    });
    customElements.define('angular-module-root', webComponent);
  }
}
