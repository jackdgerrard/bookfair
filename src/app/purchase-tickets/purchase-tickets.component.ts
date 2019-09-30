import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-tickets',
  templateUrl: './purchase-tickets.component.html',
  styleUrls: ['./purchase-tickets.component.scss']
})
export class PurchaseTicketsComponent implements OnInit {
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.total += 5;
  }

}
