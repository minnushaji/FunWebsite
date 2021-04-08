import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
