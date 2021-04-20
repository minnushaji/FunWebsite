import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUtilitiesModule, MDBBootstrapModule } from 'angular-bootstrap-md';

import {CoreModule} from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './modules/main-page1/main-page.component';
import { LandingComponent } from './modules/landing/landing.component';
import { VideogamesComponent } from './modules/videogames/videogames.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LandingComponent,
    VideogamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MDBBootstrapModule.forRoot(),
    InputUtilitiesModule,
    CoreModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
