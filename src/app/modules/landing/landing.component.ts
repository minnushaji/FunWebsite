import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit() {
  }

  goToMainPage() {
    this.route.navigate(['main']);
    console.log('Main page')
  }

}
