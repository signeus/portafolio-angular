import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';
import { Team } from './../interfaces/team.interface';

@Injectable({
 providedIn: 'root'
})
export class InfoPageService {

  urlTeam = 'https://ng-projects-333.firebaseio.com/team.json';
  info: InfoPage = {};
  team: [Team] = [{}];

  loaded = false;


  constructor(private _httpClient: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this._httpClient.get('assets/data/data-pagina.json').subscribe((resp: InfoPage) => {
      this.info = resp;
      this.loaded = true;
    });
  }

  private loadTeam() {
    this._httpClient.get(this.urlTeam).subscribe((resp: [Team]) => {
      this.team = resp;
    });
  }

}
