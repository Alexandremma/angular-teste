import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CitizenshipHomeComponent } from './components/citizenship-home/citizenship-home.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { CitizenshipAdvantagesComponent } from './components/citizenship-advantages/citizenship-advantages.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CitizenshipHomeComponent,
    WhoWeAreComponent,
    OurServicesComponent,
    CitizenshipAdvantagesComponent,
    FaqSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
