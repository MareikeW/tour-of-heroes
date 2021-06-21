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
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}