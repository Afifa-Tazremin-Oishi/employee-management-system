import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <router-outlet></router-outlet>
  `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employe-management-system';
}
