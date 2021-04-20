import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PanelComponent} from './components/panel/panel.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [PanelComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [PanelComponent, MenuComponent]
})
export class SharedModule { }
