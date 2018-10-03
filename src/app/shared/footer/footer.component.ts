import { Component, OnInit } from '@angular/core';
import { InfoPageService } from './../../services/info-page.service';
import { InfoPage } from './../../interfaces/info-page.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor(public infoPage: InfoPageService) {}


  ngOnInit() {
  }

}
