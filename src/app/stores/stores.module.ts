import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListStoreModule } from './list-store/list-store.module';
import { DetailStoreModule } from './detail-store/detail-store.module';
import { RankingStoresModule } from './ranking-stores/ranking-stores.module';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ListStoreModule,
    DetailStoreModule,
    RankingStoresModule
  ]
})
export class StoresModule { }
