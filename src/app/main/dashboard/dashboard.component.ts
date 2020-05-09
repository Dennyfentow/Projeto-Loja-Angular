import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboad.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalUser: number = 0;
  activeStore: number = 0;
  activeProducts: number = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    // Pegar os dados da API pelo service
    this.dashboardService.getTotalUsers().subscribe(users => this.totalUser = users);
    this.dashboardService.getActiveStores().subscribe(stores => this.activeStore = stores);
    this.dashboardService.getActiveProducts().subscribe(products => this.activeProducts = products);
  }

}
