import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  background = "url('../../../assets/images/main.jpg')";
  videostatus = false;
  videogames1 = 'videogames1';
  panelData: any;
  constructor(private settingsService: SettingsService, private route:Router) { }

  ngOnInit() {
    this.getPanelData('panel/data0.json')
  }

  changeBackground(panel) {
    this.background = panel.background;
    // console.log(panel, 'changes');
    // this.videostatus = true;

  }

  revert() {
    this.background = "url('../../../assets/images/main.jpg')";
    // console.log('reverted');
    this.videostatus = false;
  }

  getPanelData(path) {
    this.settingsService.getSettings(path).subscribe(
      (response) => {
        this.panelData = response;
        console.log('panel daata ', this.panelData)
      },
      (error) => {
        console.log('error is ', error);
      }
    );
  }

  goToDetailPage(url) {
    this.route.navigate([url]);
  }

}
