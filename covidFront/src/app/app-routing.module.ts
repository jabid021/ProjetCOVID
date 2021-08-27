import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PraticienInfosPersoComponent} from "./practicien-infos-perso/praticien-infos-perso.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {path: "praticien-infos", component: PraticienInfosPersoComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
