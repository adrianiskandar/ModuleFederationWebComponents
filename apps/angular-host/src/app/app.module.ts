import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          matcher: startsWith('angular-module'),
          component: WrapperComponent,
          data: { importName: 'angular-module', elementName: 'angular-module-root' },
        },
        {
          matcher: startsWith('react-module'),
          component: WrapperComponent,
          data: { importName: 'react-module', elementName: 'react-module-root' },
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
