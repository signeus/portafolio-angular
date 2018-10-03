import { Component, OnInit } from '@angular/core';
import { InfoPageService } from './../../services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(public infoPage: InfoPageService) {}

  ngOnInit() {
  }

}
