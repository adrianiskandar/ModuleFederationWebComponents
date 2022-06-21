import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'module-federation-web-components-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = { name: "some name", animal: "some animal" };


    this.dialog.open(DialogComponent, dialogConfig);
  }

  ngOnInit(): void {}
}
