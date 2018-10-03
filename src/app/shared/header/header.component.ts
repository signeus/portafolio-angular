import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { InfoPage } from './../../interfaces/info-page.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPage: InfoPageService) {}

  ngOnInit() {
  }

}
