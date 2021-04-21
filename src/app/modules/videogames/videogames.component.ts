import { AotSummaryResolver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {

  @ViewChild('witcher')witcher: ElementRef;
  @ViewChild('nier')nier: ElementRef;
  @ViewChild('dota')dota: ElementRef;
  @ViewChild('tombraider')tombraider: ElementRef;
  @ViewChild('cyberpunk')cyberpunk: ElementRef;

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  scrollToElement(event) {
    console.log('eleement ', event)
    this.witcher.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  scrollToNier() {
    this.nier.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  scrollToDota() {
    this.dota.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  scrollToTombRaider() {
    this.tombraider.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  scrollToCyberpunk() {
    this.cyberpunk.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

}
