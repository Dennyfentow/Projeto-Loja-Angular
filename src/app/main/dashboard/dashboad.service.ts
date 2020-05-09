import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = "/api"; // isto é devido ao proxy configurado

@Injectable({ 
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) {

    }

    getTotalUsers() {
        return this.http.get<number>(`${API}/customers/count`)
    }

    getActiveStores() {
        return this.http.get<number>(`${API}/query/store/total/count/active`)
    }

    getActiveProducts() {
        return this.http.get<number>(`${API}/products/count`)
    }
 }