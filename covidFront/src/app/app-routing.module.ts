import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PraticienInfosPersoComponent} from "./practicien-infos-perso/praticien-infos-perso.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {PatientRdvPasseComponent} from "./patient-rdv-passes/patient-rdv-passe.component";
import {PatientRdvAVenirComponent} from "./patient-rdv-avenir/patient-rdv-avenir.component";
import {LieuComponent} from "./lieu/lieu.component";
import {MotifComponent} from "./motif/motif.component";

let PatientRdvAVenirComponentComponent;
const routes: Routes = [
  {path: "app-patient-rdv-passes", component: PatientRdvPasseComponent},
  {path: "app-patient-rdv-avenir", component: PatientRdvAVenirComponent},
  {path: "praticien-infos", component: PraticienInfosPersoComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"},
  {path: "motif", component: MotifComponent},
  {path: "lieu", component: LieuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
