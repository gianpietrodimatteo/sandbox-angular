import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Por enquanto so deliverando o heroes mockado
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Retornando um observable do array de heróis
  // Observable<Hero[]> that emits a single value, the array of heroes
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
