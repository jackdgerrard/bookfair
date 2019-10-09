import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      window.alert("This web application is for demonstration purposes only,I am not affiliated with any Cork city book fair or Parc Ui Chaoimh");
  }

}
