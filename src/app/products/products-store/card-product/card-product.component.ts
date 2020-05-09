import { Component, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'pl-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

  @Input() product: Product;

}
