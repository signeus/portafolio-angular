import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              public productService: ProductsService) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      console.log(params['text']);
      this.productService.searchProduct(params['text']);
    });
  }

}
