import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {

  @Input() products: Product[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data.products;
    console.log(this.products);
  }

}
