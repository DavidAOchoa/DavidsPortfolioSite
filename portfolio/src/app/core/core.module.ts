import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutPageComponent,
    ContactComponent
  ]
})
export class CoreModule { }
