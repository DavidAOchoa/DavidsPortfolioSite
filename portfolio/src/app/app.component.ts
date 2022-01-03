import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Header -->
  <app-header></app-header>
  <!-- Home -->
  <app-home></app-home>

  <app-about-page></app-about-page>
  <!-- routes get injected here-->
  <router-outlet></router-outlet>
  <!-- Footer -->
  <app-footer></app-footer>
  `,
  styles: [`
   


  `]
})
export class AppComponent {
  title = "David's portfolio site!";
}
