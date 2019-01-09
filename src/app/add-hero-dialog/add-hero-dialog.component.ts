import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-hero-dialog',
  templateUrl: './add-hero-dialog.component.html',
  styleUrls: ['./add-hero-dialog.component.css']
})
export class AddHeroDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddHeroDialogComponent>, private heroService: HeroService) { }

  ngOnInit() {
  }

  add(name: string, attack: number, health: number): void {
    name = name.trim();
    if (!name || !attack || !health) { return; }
    this.heroService.addHero({ name, attack, health } as Hero)
      .subscribe();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
