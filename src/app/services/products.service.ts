import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loaded = false;

  urlBase = 'https://ng-projects-333.firebaseio.com/';
  urlProductsIdx = 'products_idx';
  urlProducts = 'products';
  extensionFile = '.json';
  products: [Product] = [{}];

  constructor(private _http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this._http.get(this.urlBase + this.urlProductsIdx + this.extensionFile).subscribe((resp: any) =>  {
      this.products = resp;
      this.loaded = true;
    });
  }

  public getProduct(item: string) {
    return this._http.get(`${this.urlBase}${this.urlProducts}/${item}${this.extensionFile}`);
  }
}
