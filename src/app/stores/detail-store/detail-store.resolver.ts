import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '../store';
import { StoreService } from '../store.service';

@Injectable({ providedIn: 'root'})
export class DetailStoreResolver implements Resolve<Observable<Store>> {

    constructor(private storeService: StoreService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store> {
        let idStore = route.params.idStore;
        return this.storeService.loadStoreDetail(idStore);
    }

}