import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pl-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {

  stores: Store[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Resolver enviar pronto antes de carregar stores
    this.stores = this.activatedRoute.snapshot.data.stores;
  }

}
