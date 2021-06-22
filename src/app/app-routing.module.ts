import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/* A typical Angular Route has two properties:
      path: a string that matches the URL in the browser address bar.
      component: the component that the router should create when navigating to this route. */
const routes: Routes = [ // routes array
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default path
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, // parameterized route
  { path: 'heroes', component: HeroesComponent }
];


/* The @NgModule metadata initializes the router and starts it listening for browser location changes.

The following line adds the RouterModule to the AppRoutingModule imports array and configures it with 
the routes in one step by calling RouterModule.forRoot(): */
@NgModule({
  /* The method is called forRoot() because you configure the router at the application's root level. 
  The forRoot() method supplies the service providers and directives needed for routing, and performs 
  the initial navigation based on the current browser URL. */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  /* Next, AppRoutingModule exports RouterModule so it will be available throughout the application. */
})
export class AppRoutingModule { }
