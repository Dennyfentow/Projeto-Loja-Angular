import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { DetailStoreComponent } from './detail-store.component';




@NgModule({
  declarations: [DetailStoreComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    DetailStoreComponent
  ]
})
export class DetailStoreModule { }
