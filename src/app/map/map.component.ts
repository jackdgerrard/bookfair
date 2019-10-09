import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
lat: number;
lng: number;
  constructor() { }

  ngOnInit() {
    this.lat = 51.899813;
    this.lng = -8.4377698;
  }

}
