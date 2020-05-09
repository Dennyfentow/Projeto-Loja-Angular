import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStoreResolver } from './stores/list-store/list-store.resolver';
import { ListStoreComponent } from './stores/list-store/list-store.component';
import { DetailStoreComponent } from './stores/detail-store/detail-store.component';
import { DetailStoreResolver } from './stores/detail-store/detail-store.resolver';
import { ProductsStoreComponent } from './products/products-store/products-store.component';
import { ProductsStoreResolver } from './products/products-store/products-store.resolver';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { RankingStoresComponent } from './stores/ranking-stores/ranking-stores.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'stores',
    component: ListStoreComponent,
    resolve: {
      stores: ListStoreResolver
    }
  },
  {
    path: 'stores/:idStore',
    component: DetailStoreComponent,
    resolve: {
      store: DetailStoreResolver
    }
  },
  {
    path: 'ranking',
    component: RankingStoresComponent
  },
  {
    path: 'products/:identStore',
    component: ProductsStoreComponent,
    resolve: {
      products: ProductsStoreResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
