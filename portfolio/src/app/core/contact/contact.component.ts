import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
            <form action="https://formspree.io/f/xqknanbe" method="POST">

            <!-- Contact Me header -->
            <h1 class="title has-text-white">Contact Me!</h1>
          
              <!-- name -->
              <div class="field">
                <label class="label has-text-white">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="full-name"
                  class="input"
                  required=""
                  >

             
              </div>

              <!-- email -->
              <div class="field">
                <label class="label has-text-white">Email</label>
                <input 
                  type="email" 
                  name="_replyto" 
                  id="email-address"
                  class="input"
                  required=""
                  >

                 
                  
              </div>

              <!-- message -->
              <div class="field">
                <label class="label has-text-white">Message</label>
                <textarea 
                
                class="textarea"
                name="message" 
                id="message" 
                
                required=""
                maxlength="256"></textarea>
              </div>
              
              
              <!-- submit button -->
              <button type="submit" class="button">
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
  
  }

}
