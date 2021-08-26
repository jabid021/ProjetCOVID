import { Injectable } from '@angular/core';
import {AppConfigService} from "../app-config.service";
import {HttpClient} from "@angular/common/http";
import {Praticien} from "../model/praticien";
import {Observable} from "rxjs";
import {AccueilComponent} from "../accueil/accueil.component";

@Injectable({
  providedIn: 'root'
})
export class PraticienService {
  praticiens: Array<Praticien> = new Array<Praticien>();
  recherche:string;
  chemin: string;
  constructor(private http : HttpClient,private appconfig:AppConfigService, private acceuilComponent:AccueilComponent) {
    this.recherche = this.acceuilComponent.recherche;
    this.chemin = this.appconfig.backEndUrl + "praticien/";
  }

  findAll(): Array<Praticien> {
    return this.praticiens;
  }

  findById(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.chemin + id+"/with-specialite");
  }

  findAllPraticienWithSpecialites(): Array<Praticien> {
    let temp: Array<Praticien> = new Array<Praticien>();
    this.http.get<Array<Praticien>>(this.chemin +"with-specialites/").subscribe(response => {
      this.praticiens = response;
      for (var indice = 0; indice < this.praticiens.length; indice++) {
        if (this.praticiens[indice].nom == this.recherche) {
          temp.push(this.praticiens[indice]);
        }
      }
      this.praticiens = temp;
      return this.praticiens;
    }, error => console.log(error));
  }

  create(praticien: Praticien) {
  }

  modify(praticien: Praticien) {
    this.http.put<Array<Praticien>>(this.chemin+praticien.id,praticien).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  deleteById(id: number) : Observable<void> {
    return null;
  }


  load()
  {
  }
}
