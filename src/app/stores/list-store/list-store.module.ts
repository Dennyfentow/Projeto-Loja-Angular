import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListStoreComponent } from './list-store.component';
import { ListComponent } from './list/list.component';
import { CardStoreComponent } from './card-store/card-store.component';
import { MouseEnterHoverModule } from 'src/app/shared/directives/mouse-enter-hover.module';

@NgModule({
    declarations: [ListStoreComponent, ListComponent, CardStoreComponent],
    imports: [CommonModule, MouseEnterHoverModule, MatCardModule, MatButtonModule],
    exports: [ListStoreComponent]
})
export class ListStoreModule { }