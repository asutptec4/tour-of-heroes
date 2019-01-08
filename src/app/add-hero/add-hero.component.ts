import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService, private location: Location) { }

  ngOnInit() {
  }

  add(name: string, attack: number, health: number): void {
    name = name.trim();
    if (!name || !attack || !health) { return; }
    this.heroService.addHero({ name, attack, health } as Hero)
      .subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
