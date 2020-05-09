import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from "rxjs";
import { StoreService } from '../store.service';
import { RankingStore } from './models/ranking-store';
import { Store } from '../store';
import { map, mergeMap } from 'rxjs/operators';
import { ResultItem } from './models/result-item';

@Component({
  selector: 'app-ranking-stores',
  templateUrl: './ranking-stores.component.html',
  styleUrls: ['./ranking-stores.component.css']
})
export class RankingStoresComponent implements OnInit {

  rankingStores: RankingStore[] = [];
  counts: number[] = []; // registro para os totais de cada store

  constructor(private service: StoreService) { }

  ngOnInit(): void {

    this.service.loadRankings().pipe(
      map(rankings => {
        return rankings.results
      }), mergeMap( (resultItems: ResultItem[]) => { 
        // Após pegar os rankings, necessário realizar mais duas requisições para coletar os stores
        let obs: Observable<Store[]>[] = []
        resultItems.forEach( resultItem => {
          this.counts.push(resultItem.count) // salvar os totais de cada store
          obs.push(this.service.loadStoreForIdent(resultItem.ident)) // registrar cada observable para utilizar no forkJoin
        })
        return forkJoin([...obs]);
      })
    ).subscribe( results => {
        let stores = results.reduce((dados, stores) => {
          return dados.concat(stores)
        })

        stores.forEach((store, index) => {
          let rStore = new RankingStore(store.name,store.logo, this.counts[index]);
          this.rankingStores = this.rankingStores.concat([rStore]); // atribuir para que o Angular reconheça cada alteração
        })

        console.log(this.rankingStores);
    })

  }

}
