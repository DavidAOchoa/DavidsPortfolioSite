import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" rel="stylesheet">

    

      <!-- Form Section -->
      <section class="section">

        <div class="container">
          <!-- Contact Form -->
          <div class="formBody">
            <form (ngSubmit)="submitForm()" #contactForm="ngForm">

            <!-- Contact Me header -->
            <h1 class="title has-text-white">Contact Me!</h1>
          
              <!-- name -->
              <div class="field">
                <label class="label has-text-white">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  class="input" 
                  [(ngModel)]="name" 
                  #nameInput="ngModel"
                  required>

                <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
                  Your name is required.
                </div>
              </div>

              <!-- email -->
              <div class="field">
                <label class="label has-text-white">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  class="input" 
                  [(ngModel)]="email"
                  #emailInput="ngModel"
                  required
                  email>

                  <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
                    Your email is required and must be a valid email.
                  </div>
                  
              </div>

              <!-- message -->
              <div class="field">
                <label class="label has-text-white">Message</label>
                <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
              </div>
              
              
              <!-- submit button -->
              <button 
              type="submit" 
              class="button"
              [disabled]="contactForm.invalid">
                Send!
              </button>

            </form>
          </div>
        </div>
      </section>


  `,
  styles: [`
  
 

  .formBody {
    font-family: 'Salsa', cursive;
    background-color: rgba(23, 19, 27, 1);
    color: white;
    border-radius: 25px;
    padding: 75px;
    position: center;
        
  }

  .section {
    background-color: rgb(31,27,34);
  }

  .button {
    font-family: 'Salsa', cursive;
  }
  
  `]
})
export class ContactComponent implements OnInit {
name: string = "";
email: string = "";
message: string = "";



  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My name is ${this.name}. My Email is ${this.email}
    My Message is ${this.message}`;
    // grab all the fields and their values
    alert(message);
  }

}
