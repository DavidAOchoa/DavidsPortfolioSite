import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <div class="navbar">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/image/ACMProjects.png" alt="Image not found">          
        </a> 
      </div>

      <div class="navbar-menu" id="nav-links">
            <div class="navbar-start">
              <a class="navbar-item">about</a>
              <a class="navbar-item">resume</a>
              <a class="navbar-item">work</a>
              <a class="navbar-item">contact</a>
            </div>
          </div>

    </div>
  `,
  styles: [`
  .navbar-item {
 
  }

  .navbar {
    background-color: rgb(31,27,34);
  }
  
  
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
