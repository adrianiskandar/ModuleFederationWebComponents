import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-module-root',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class RemoteEntryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }
}
