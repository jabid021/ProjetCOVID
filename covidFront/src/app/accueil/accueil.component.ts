import { Component, OnInit } from '@angular/core';
import {PraticienService} from "../praticien/praticien.service";
import {Praticien} from "../model/praticien";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  recherche:string;

  constructor(private praticienService: PraticienService) {
    this.findAll();
  }

  ngOnInit(): void {
  }

  findAll(){
    this.praticienService.findAllPraticienWithSpecialites();
  }

  listBis(): Array<Praticien> {
    console.log(this.praticienService.praticiens);
    if(this.recherche) {
      console.log("recherche="+this.recherche);
      return this.praticienService.praticiens.filter(p => p.nom.indexOf(this.recherche) != -1 || (p.specialites.findIndex(s => s.specialite.nom && s.nom.indexOf(this.recherche) != -1) != -1))
    }

    console.log("pas recherche");
    return this.praticienService.praticiens;
  }

}
