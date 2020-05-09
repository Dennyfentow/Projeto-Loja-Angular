import { Component, Input } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'pl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() stores: Store[] = [];

}
