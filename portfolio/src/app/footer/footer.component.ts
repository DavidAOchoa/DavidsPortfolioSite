import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet">


     <div class="container content has-text-white">
        <p>Made with ❤ by David using Angular and Bulma.io</p>
     </div>
    </footer>
  `,
  styles: [`
  .footer {
    background-color: rgb(31,27,34);
    font-family: 'Source Serif Pro', serif;
  }

  .container {
    position: relative;
    bottom: -55px;
    left: -25px;
  

  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
