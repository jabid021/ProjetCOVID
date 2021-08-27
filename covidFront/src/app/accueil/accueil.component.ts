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

  list(): Array<Praticien> {
    let temp: Array<Praticien> = new Array<Praticien>();
    for (var indice = 0; indice < this.praticienService.praticiens.length; indice++) {
      if (this.praticienService.praticiens[indice].nom == this.recherche || this.recherche in this.praticienService.praticiens[indice].specialites) {
        temp.push(this.praticienService.praticiens[indice]);
      }
    }
    this.praticienService.praticiens = temp;
    return this.praticienService.praticiens;
  }

}
