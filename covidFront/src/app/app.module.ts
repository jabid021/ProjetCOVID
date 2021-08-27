import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRdvPasseComponent } from './patient-rdv-passes/patient-rdv-passe.component';
import { PatientRdvAVenirComponent } from './patient-rdv-avenir/patient-rdv-avenir.component';
import { PatientComponent } from './patient/patient.component';
import {PraticienInfosPersoComponent} from "./practicien-infos-perso/praticien-infos-perso.component";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PatientRdvPasseComponent,
    PatientRdvAVenirComponent,
    PatientComponent,
    PraticienInfosPersoComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
