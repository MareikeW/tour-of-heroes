import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

/* FormsModule damit in heroescomponent template der input mit ngModel funktioniert */

/* Angular needs to know how the pieces of your application fit together and what other files 
and libraries the application requires. This information is called metadata.
Some of the metadata is in the @Component decorators that you added to your component classes. 
Other critical metadata is in @NgModule decorators.
The most important @NgModule decorator annotates the top-level AppModule class.
The Angular CLI generated an AppModule class in src/app/app.module.ts when it created the project. 
This is where you opt-in to the FormsModule.
*/

/* Every component must be declared in exactly one NgModule. --> CLI did that for me: HeroesComponent */
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

Make HttpClient available everywhere in the application in two steps. First, add it to the 
root AppModule by importing it.

Next, still in the AppModule, add HttpClientModule to the imports array.*/