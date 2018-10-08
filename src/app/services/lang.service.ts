import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LangService {


  loaded = false;
  moment = moment;

  constructor(private _httpClient: HttpClient) {
    this.loadSpanish();
  }


  private loadSpanish() {
    this._httpClient.get('assets/lang/moment/es.json').subscribe((resp: any) => {
      this.loaded = true;
      this.moment.locale('es' , resp);
      this.moment().locale('es');
    });
  }

  public getDateFormated(format: string = 'LLLL'): string {
    return moment().format(format);
  }
}
