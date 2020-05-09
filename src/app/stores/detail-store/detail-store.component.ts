import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../store';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnInit {

  store: Store;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Recebendo Store Pronto para carregar no Template
    this.store = this.activatedRoute.snapshot.data.store;
  }

}
