import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-large is-info">
  <div class="hero-body has-background-black">
    <p class="title">
      David Ochoa
    </p>
    <p class="subtitle">
      Large subtitle
    </p>
  </div>
</section>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
