import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PraticienInfosPersoComponent} from "./practicien-infos-perso/praticien-infos-perso.component";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PraticienInfosPersoComponent,
    AccueilComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
