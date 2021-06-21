import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

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
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }  
}
