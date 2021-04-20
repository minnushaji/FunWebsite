import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
    
  ],
  exports:[SharedModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
