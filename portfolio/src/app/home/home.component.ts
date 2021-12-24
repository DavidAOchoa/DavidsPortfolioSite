import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-large is-info">
  <div class="hero-body is-family-code">
    <p class="title">
      David Ochoa
    </p>
    <p class="subtitle">
      Large subtitle
    </p>
  </div>
</section>
  `,
  styles: [`
  
    .hero {
      background-image: url('/assets/image/SkullFaceGirl.jpg') !important;
      background-size: cover;
      background-position: center center;
    }

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
