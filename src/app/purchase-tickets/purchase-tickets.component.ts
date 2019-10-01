import { Component, OnInit } from '@angular/core';

class Ticket {
  name: string;
  price: number;

  constructor(x: string, y: number){
    this.name = x;
    this.price = y;
  }
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
    this.total = 0;
   }

  ngOnInit() {
  }

  incrementTotal() {
    this.total ++;
    this.tickets.push(new Ticket('john', 5));
  }

}