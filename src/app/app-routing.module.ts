import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { MainPageComponent } from './modules/main-page1/main-page.component';
import {VideogamesComponent} from './modules/videogames/videogames.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'videogame',
    component: VideogamesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LandingComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
