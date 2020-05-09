import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { RankingStoresComponent } from './ranking-stores.component';

@NgModule({
    declarations: [RankingStoresComponent],
    imports: [CommonModule, RouterModule, MatCardModule],
    exports: [RankingStoresComponent]
})
export class RankingStoresModule { }