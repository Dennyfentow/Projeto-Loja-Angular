import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProductsStoreComponent } from './products-store/products-store.component';
import { CardProductComponent } from './products-store/card-product/card-product.component';
import { ProductsComponent } from './products-store/products/products.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ProductsStoreComponent, CardProductComponent, ProductsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ]
})
export class ProductsModule { }
