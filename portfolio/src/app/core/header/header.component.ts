import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
   <div class="navbar">
      <!-- logo -->
      <div class="navbar-brand">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet">

        <a class="navbar-item">
          <img src="assets/image/Pie.png" alt="Image not found">          
        </a> 
      </div>

      <div class="navbar-menu" id="nav-links">
        <div class="navbar-start">
          <a class="navbar-item has-text-white">about</a>
          <a class="navbar-item has-text-white">contact</a>
          <a class="navbar-item has-text-white" href="/assets/documents/DavidOchoaResumeOVL.pdf">resume</a>
          <a class="navbar-item has-text-white"  href="https://github.com/DavidAOchoa">GitHub</a>
          <!-- <a class="navbar-item has-text-white">work</a> -->
        </div>
      </div>
    </div>
  `,
  styles: [`

  

  .navbar-item:hover {
    background-color: rgb(31,27,34);
  }

  .navbar {
    background-color: rgb(31,27,34);
    font-family: 'Source Serif Pro', serif;
  }
  
  
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
