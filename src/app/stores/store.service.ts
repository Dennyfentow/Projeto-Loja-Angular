import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Store } from "./store";
import { Product } from '../products/product';
import { Ranking } from './ranking-stores/models/ranking';

const API = "/api"; // isto é devido ao proxy configurado

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(private http: HttpClient) { }

    listAllStores() {
        return this.http
            .get<Store[]>(API + '/stores');
    }

    loadStoreDetail(id: number) {
        return this.http
            .get<Store>(`${API}/stores/${id}`);
    }

    loadStoreForIdent(ident: string) {
        let params = new HttpParams()
            .append('ident.equals', ident)
        return this.http.get<Store[]>(`${API}/stores`, { params })
    }

    loadProductsForStore(ident: string) {
        let params = new HttpParams()
            .append('storeRefId.equals', ident)
        return this.http
            .get<Product[]>(`${API}/products`, { params })
    }

    loadRankings() {
        return this.http
            .get<Ranking>(`${API}/query/store/ranking/sales/by/total`)
    }

}