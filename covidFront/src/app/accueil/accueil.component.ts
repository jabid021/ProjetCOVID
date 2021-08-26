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

  constructor(private praticienService: PraticienService) { }

  ngOnInit(): void {
  }

  list(): Array<Praticien> {
    return this.praticienService.findAllPraticienWithSpecialites();
  }

}
