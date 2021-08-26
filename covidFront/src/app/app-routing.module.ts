import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PraticienPlanningComponent} from "./praticien-planning/praticien-planning.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path : "praticien-planning", component: PraticienPlanningComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
