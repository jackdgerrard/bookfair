import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookfair';
  private cookieValue: string;

  constructor(private cookieService: CookieService) {}

  public ngOnInit(): void {
    if (!this.cookieService.get('CookiesAccepted')) {
      this.cookieService.set('CookiesAccepted', 'false');
    }
    this.cookieValue = this.cookieService.get('CookiesAccepted');
  }
}
