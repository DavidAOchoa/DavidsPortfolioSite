import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
     <div class="container content has-text-white">
        <p>Made with ❤ by David from Scratch</p>
     </div>
    </footer>
  `,
  styles: [`
  .footer {
    background-color: rgb(31,27,34);
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
