import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PraticienInfosPersoComponent} from "./practicien-infos-perso/praticien-infos-perso.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {PatientRdvPasseComponent} from "./patient-rdv-passes/patient-rdv-passe.component";
import {PatientRdvAVenirComponent} from "./patient-rdv-avenir/patient-rdv-avenir.component";
import {PatientInfoService} from "./patient-info/patient-info.service";
import {AdministrateurService} from "./administrateur/administrateur.service";
import {LieuComponent} from "./lieu/lieu.component";
import {MotifComponent} from "./motif/motif.component";
import {PatientInfoComponent} from "./patient-info/patient-info.component";
import {AdministrateurComponent} from "./administrateur/administrateur.component";
import {ConnexionComponent} from "./connexion/connexion.component";

let PatientRdvAVenirComponentComponent;

const routes: Routes = [
  {path: "app-patient-rdv-passes", component: PatientRdvPasseComponent},
  {path: "app-patient-rdv-avenir", component: PatientRdvAVenirComponent},
  {path: "praticien-infos", component: PraticienInfosPersoComponent},
  {path: "praticien-infos/:id", component: PraticienInfosPersoComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"},
  {path:"infos-praticien",component:PraticienInfosPersoComponent},
  {path: "patient-info", component: PatientInfoComponent},
  {path: "patient-info/:id", component: PatientInfoComponent},
  {path: "motif", component: MotifComponent},
  {path: "lieu", component: LieuComponent},
  {path: "administrator", component: AdministrateurComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
