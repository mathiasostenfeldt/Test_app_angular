import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  open:boolean = true;
  loggedIn:boolean = true;

  toggleSidenav(){
    this.open = !this.open;
  }
}


