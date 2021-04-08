import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import { LandingModule } from './landing/landing.module'



@NgModule({
  declarations: [],
  imports: [
    MainPageModule, 
    LandingModule,
    CommonModule
  ],
  exports: [MainPageModule, LandingModule]
})
export class FeatureModuleModule { }
