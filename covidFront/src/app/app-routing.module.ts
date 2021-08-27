import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientRdvPasseComponent} from "./patient-rdv-passes/patient-rdv-passe.component";
import {PatientRdvAVenirComponent} from "./patient-rdv-avenir/patient-rdv-avenir.component";

let PatientRdvAVenirComponentComponent;
const routes: Routes = [
  {path: "app-patient-rdv-passes", component: PatientRdvPasseComponent},
  {path: "app-patient-rdv-avenir", component: PatientRdvAVenirComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
