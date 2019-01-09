import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddHeroDialogComponent } from './add-hero-dialog/add-hero-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AddHeroDialogComponent, { height: '400px', width: '300px' });
  }
}
