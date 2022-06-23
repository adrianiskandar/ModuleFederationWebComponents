import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'module-federation-web-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-host';
  user = '';
  @HostListener('document:user-selected', ['$event.detail'])
  changeUser(user: string): void {
    console.log(user);
    this.user = user;
  }
}
