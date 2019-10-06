import { Component, OnInit } from '@angular/core';

interface Ticket {
  name: string;
  price: number;
}

@Component({
  selector: 'app-purchase-tickets',
  templateUrl: './purchase-tickets.component.html',
  styleUrls: ['./purchase-tickets.component.scss']
})

export class PurchaseTicketsComponent implements OnInit {
  total: number;
  tickets: Ticket[];

  constructor() {
   }

  ngOnInit() {
    this.total = 0;
    this.tickets = [];
  }

  addAdultTicket() {
    this.tickets.push({
      name: `Ticket ${this.tickets.length + 1}`,
      price: 5
    });
    this.total += 5;
  }

  addChildTicket() {
    this.tickets.push({
      name: `Ticket ${this.tickets.length + 1}`,
      price: 3
    });
    this.total += 3;
  }

  removeTicket() {
    this.total -= this.tickets[this.tickets.length -1].price;
    this.tickets.pop();
  }
}
