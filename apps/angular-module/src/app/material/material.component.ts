import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'module-federation-web-components-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  name: string;
  username: string;

  @HostListener('document:user-selected', ['$event.detail'])
  changeUser(user: string): void {
    this.username = user;
  }

  constructor(private dialog: MatDialog) {
    this.name = 'Adrian';
    this.username = '';
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = { name: this.name, username: this.username };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.username = result;
      const event = new CustomEvent('user-selected', { detail: this.username });
      document.dispatchEvent(event);
    });
  }

  ngOnInit(): void {}
}
