/* HeroesComponent class file */
/*
import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes"; // imports mock-heroes

/* @Component ist eine Decoratorfunktion, in der Metadaten der Komponente angegeben werden */
/*  selector: CSS-Selektor.
    templateUrl: Ort von der Komponenten Template-Datei
    styleUrls: Ort von den privaten CSS-Styles der Komponente
*/
/*
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})*/
//export class HeroesComponent implements OnInit {
  // hero property of type object by adding imported Hero interface
  // Initialisierung mit einer Id von 1 und dem Namen 'Windstorm'
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/


  // In the same file (HeroesComponent class), define a component property called 
  // heroes to expose the HEROES array for binding.
 // hero?: Hero;

 // heroes = HEROES;
  /* onSelect() method, which assigns the clicked 
  hero from the template to the component's selectedHero.*/
  /*selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
*/
/* ngOnInit() ist eine Lifecycle-Hook, die Angular kurz nach Komponentenerstellung ruft. Darin sollte Initialisierungslogik platziert werden */
/* Die Komponentenklasse wird exportiert, damit sie irgendwoanders importiert werden kann */
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  // Adds a private heroService parameter of type HeroService to the constructor.

  /* The parameter simultaneously defines a private heroService property and identifies 
  it as a HeroService injection site.

  When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService 
  parameter to the singleton instance of HeroService. */
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  /* Calls getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at 
  an appropriate time after constructing a HeroesComponent instance. */
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // A method to retrieve the heroes from the service.
  /* The new version waits for the Observable to emit the array of heroes—which could happen 
  now or several minutes from now. The subscribe() method passes the emitted array to the callback, 
  which sets the component's heroes property.
  This asynchronous approach will work when the HeroService requests heroes from the server.*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

/* Each time you click a hero, a new message appears to record the selection. Use the Clear messages 
button to clear the message history. */