import { Identifiers } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() panelId: String;
  // @Output() backgroundChange = new EventEmitter();
  value: any;

  constructor() { }

  ngOnInit() {
  }

  animatePanel(panelId) {
    panelId.animate = true;
  }

  revert(panelId) {
    panelId.animate = false;
  }

  // changeBackground(event) {
  //   this.backgroundChange.emit(event);
  // }

}
