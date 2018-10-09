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
  products: Product[] = [];

  filterProducts: Product[] = [];

  constructor(private _http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise(( resolve, reject) => {
      this._http.get(this.urlBase + this.urlProductsIdx + this.extensionFile).subscribe((resp: any) =>  {
        this.products = resp;
        this.loaded = true;
        resolve();
      });
    });
  }

  public getProduct(item: string) {
    return this._http.get(`${this.urlBase}${this.urlProducts}/${item}${this.extensionFile}`);
  }

  public searchProduct(text: string) {
    if (this.products.length === 0) {
      // Load products
      this.loadProducts().then( () => {
        // When you have the products this execute...
        this.filterProductsList(text);
      });
    } else {
      this.filterProductsList(text);
      // Apply the filter because the products are already.
    }
  }

  private filterProductsList(text: string) {
    // this.filterProducts = this.products.filter( product => {
    //   return true;
    // });
    text.toLowerCase();
    this.filterProducts = [];
    this.products.forEach( prod => {
      const titleLower = prod.titulo.toLocaleLowerCase();
      const categoryLower = prod.categoria.toLocaleLowerCase();
      if (categoryLower.indexOf(text) >= 0 || titleLower.indexOf(text) >= 0) {
        this.filterProducts.push(prod);
      }
    });

  }
}
