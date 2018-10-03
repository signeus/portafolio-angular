import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loaded = false;

  urlBase = 'https://ng-projects-333.firebaseio.com/';
  urlProductsIdx = 'products_idx.json';
  urlProducts = 'products.json';
  products: [Product] = [{}];

  constructor(private _http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this._http.get(this.urlBase + this.urlProductsIdx).subscribe((resp: any) =>  {
      this.products = resp;
      this.loaded = true;
    });

    // this._http.get(this.urlBase + this.urlProducts).subscribe((resp: any) =>  {
    //   this.loaded = true;
    //   this.products = resp;
    // });
  }
}
