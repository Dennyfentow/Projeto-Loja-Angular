import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'pl-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.css']
})
export class CardStoreComponent implements OnInit {

  @Input() store: Store;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadDetailsStore(store: Store, event: Event) {
    event.stopPropagation(); // detivo o botão estar dentro do mat-card que também tem um evento
    this.router.navigate(['stores', store.id])
    // console.log(store);

  }

  loadProdutsStore(store: Store){ 
    this.router.navigate(['products', store.ident]);
  }
}