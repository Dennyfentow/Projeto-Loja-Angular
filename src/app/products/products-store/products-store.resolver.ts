import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { StoreService } from 'src/app/stores/store.service';

@Injectable({
    providedIn: 'root'
})
export class ProductsStoreResolver implements Resolve<Observable<Product[]>>{

    constructor(private storeService: StoreService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        const identStore:string = route.params.identStore;
        return this.storeService.loadProductsForStore(identStore);
    }
}