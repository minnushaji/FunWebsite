import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
