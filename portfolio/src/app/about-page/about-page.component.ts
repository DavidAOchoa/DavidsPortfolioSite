import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <section class="hero is-large is-info">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" rel="stylesheet">

      <div class="hero-body">
        <div class="paragraphBody">
          <p class="title is-size-1">
            About Me
          </p>
          <p class="subtitle is-size-3">
            Hello, I’m David. I’m originally from Houston, and I am currently studying at UT Dallas.
            These days I spend my time studying, designing, and working at a local coffee shop. Outside
            of the workspace, you’ll often find me at record stores, at home playing guitar or exploring the
            Dallas area. I have a passion for UI/UX design and all things design related.  
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
      .paragraphBody {
        font-family: 'Salsa', cursive;  
        background-color: rgba(23, 19, 27, 1);
        color: white;
        border-radius: 25px;
        padding: 75px;
        position: center;
      }

      .hero-body {
        background-color: rgb(31,27,34);
      }
  `]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
