import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', attack: 10, health: 100 },
      { id: 12, name: 'Narco', attack: 7, health: 86  },
      { id: 13, name: 'Bombasto', attack: 12, health: 130 },
      { id: 14, name: 'Celeritas', attack: 3, health: 130 },
      { id: 15, name: 'Magneta', attack: 8, health: 70 },
      { id: 16, name: 'RubberMan', attack: 15, health: 50 },
      { id: 17, name: 'Dynama', attack: 9, health: 90 },
      { id: 18, name: 'Dr IQ', attack: 10, health: 111 },
      { id: 19, name: 'Magma', attack: 14, health: 59 },
      { id: 20, name: 'Tornado', attack: 8, health: 100 }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
