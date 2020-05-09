import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../product';

@Component({
    selector: 'pl-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {

    @Input() products: Product[];

}