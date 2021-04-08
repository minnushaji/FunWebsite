import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUtilitiesModule, MDBBootstrapModule } from 'angular-bootstrap-md';

import {FeatureModuleModule} from './modules/feature-module.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModuleModule,
    MDBBootstrapModule.forRoot(),
    InputUtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
