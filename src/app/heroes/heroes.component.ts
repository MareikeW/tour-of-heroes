/* HeroesComponent class file */

import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

/* @Component ist eine Decoratorfunktion, in der Metadaten der Komponente angegeben werden */
/*  selector: CSS-Selektor.
    templateUrl: Ort von der Komponenten Template-Datei
    styleUrls: Ort von den privaten CSS-Styles der Komponente
*/

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero property of type object by adding imported Hero interface
  // Initialisierung mit einer Id von 1 und dem Namen 'Windstorm'
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

/* ngOnInit() ist eine Lifecycle-Hook, die Angular kurz nach Komponentenerstellung ruft. Darin sollte Initialisierungslogik platziert werden */
/* Die Komponentenklasse wird exportiert, damit sie irgendwoanders importiert werden kann */
