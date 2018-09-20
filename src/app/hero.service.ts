import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Por enquanto so deliverando o heroes mockado
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Retornando um observable do array de heróis
  // Observable<Hero[]> that emits a single value, the array of heroes
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
