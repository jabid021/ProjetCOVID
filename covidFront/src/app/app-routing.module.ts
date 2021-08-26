import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientInfoService} from "./patient-info/patient-info.service";
import {AdministrateurService} from "./administrateur/administrateur.service";

const routes: Routes = [
  {path: "patient-info", component: PatientInfoService},
  {path: "administrator", component: AdministrateurService}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
