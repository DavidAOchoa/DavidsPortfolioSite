import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

  
    <footer class="footer">
      <div class="content has-text-left">
      <p>Made with ❤ by David using Angular and Bulma.io</p>
      </div>
    </footer>
  
  `,
  styles: [`
 
    


    .footer {
        background-color: rgb(31,27,34);
        font-family: 'Source Serif Pro', serif;
        color: white;
        
    }
 
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
