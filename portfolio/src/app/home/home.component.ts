import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-fullheight-with-navbar is-info">
    <div class="hero-body">
      <!-- Importing Links for Salsa Font -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" rel="stylesheet">
      
      <div class="paragraphBody">
        <p class="title is-size-2">
          Hi. I’m David.
          A UI/UX Developer.  
        </p>
          
        <p class="subtitle">
          I’m a Student at the University of Texas at Dallas,
          and part time Barista at XO Coffee & Bistro.
        </p>
      </div>
    </div>
  </section>
  `,
  styles: [`
  
    .paragraphBody {
      background-color: rgba(31,27,34,.8);
      color: white;
      border-radius: 25px;
      padding: 10px;
    }

    .hero {
      background-image: url('/assets/image/SkullFaceGirl.jpg') !important;
      background-size: cover;
      background-position: center center;
      font-family: 'Salsa', cursive;  
     
    }

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
