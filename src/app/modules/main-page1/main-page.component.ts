import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  background = "url('../../../assets/images/book.jpg')";
  videostatus = false;
  constructor() { }

  ngOnInit() {
  }

  changeBackground(event) {
    event.stopPropagation(); 
    this.background = "url('../../../assets/images/" + event.srcElement.id + ".jpg')"
    console.log(event.srcElement.id, 'changes');
    this.videostatus = true;
    
  }

  revert() {
    this.background = "url('../../../assets/images/book.jpg')";
    console.log('reverted');
    this.videostatus = false;
  }

}
