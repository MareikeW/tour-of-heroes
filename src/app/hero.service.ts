import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* Components shouldn't fetch or save data directly and they certainly shouldn't 
knowingly present fake data. They should focus on presenting data and delegate data 
access to a service. */

/* Services are a great way to share information among classes that don't know each other. */

/* The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.

Removing data access from components means you can change your mind about the implementation anytime, 
without touching any components. They don't know how the service works. */

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Modifies the constructor with a parameter that declares a private messageService property. 
  // Angular will inject the singleton MessageService into that property when it creates the HeroService.
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    private heroesUrl = 'api/heroes';  // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
