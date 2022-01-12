import { Component } from '@angular/core';

@Component({
  selector: 'app-root',         //assigns string as value "app root"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']     //this is an array because it can point to more than one css page
  
})
export class AppComponent {
  username = '';
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
