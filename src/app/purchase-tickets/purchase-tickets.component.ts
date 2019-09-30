import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-tickets',
  templateUrl: './purchase-tickets.component.html',
  styleUrls: ['./purchase-tickets.component.scss']
})
export class PurchaseTicketsComponent implements OnInit {
   total: number;
  constructor() {
    this.total = 0;
   }

  ngOnInit() {
  }

  incrementTotal() {
    this.total ++;
  }

}
