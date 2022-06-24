import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper.component';
import { ShadowWrapperComponent } from './shadow-wrapper.component';
import { HomeComponent } from './home/home.component';
import { MultipleAppsComponent } from './multiple-apps/multiple-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    MultipleAppsComponent,
    WrapperComponent,
    ShadowWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          matcher: startsWith('angular-module'),
          component: WrapperComponent,
          data: {
            importName: 'angular-module',
            elementName: 'angular-module-root',
          },
        },
        {
          matcher: startsWith('react-module'),
          component: WrapperComponent,
          data: {
            importName: 'react-module',
            elementName: 'react-module-root',
          },
        },
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'multiple',
          component: MultipleAppsComponent,
        },
        {
          matcher: startsWith('shadow-angular-module'),
          component: ShadowWrapperComponent,
          data: {
            importName: 'angular-module',
            elementName: 'angular-module-root',
          },
        },
        {
          matcher: startsWith('shadow-react-module'),
          component: ShadowWrapperComponent,
          data: {
            importName: 'react-module',
            elementName: 'react-module-root',
          },
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
