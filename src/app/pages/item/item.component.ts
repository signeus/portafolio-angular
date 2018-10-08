import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Item } from '../../interfaces/item.interface';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  loaded = false;
  product: Item;
  id: string;

  constructor(private route: ActivatedRoute,
            private _langService: LangService,
            public productService: ProductsService) {
    this.route.params.subscribe( parameters => {
      console.log(parameters['id']);
      this.id = parameters['id'];
      this.productService.getProduct(parameters['id']).subscribe((resp: Item) =>  {
        this.product = resp;
        this.loaded = true;
        console.log(this.product);
      });
    });
  }

  getDate(): string {
    return this._langService.getDateFormated();
  }

  ngOnInit() {

  }
}
