import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
 providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  constructor(private _httpClient: HttpClient) {
    console.log('Servicio de infoPage');
    this._httpClient.get('assets/data/data-pagina.json').subscribe((resp: InfoPage) => {
      // console.log(resp);
      this.loaded = true;

      this.info = resp;
    });
  }

}
