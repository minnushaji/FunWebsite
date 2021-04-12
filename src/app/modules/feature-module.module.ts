import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import { MainPage1Module } from './main-page1/main-page1.module';
import { LandingModule } from './landing/landing.module'



@NgModule({
  declarations: [],
  imports: [
    MainPageModule, 
    MainPage1Module,
    LandingModule,
    CommonModule,
  ],
  exports: [MainPageModule, LandingModule]
})
export class FeatureModuleModule { }
