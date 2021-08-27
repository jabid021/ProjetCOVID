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
  chemin: string;

  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "praticien/";
  }

  findAll(): Array<Praticien> {
    return this.praticiens;
  }

  findById(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.chemin + id+"/with-specialite");
  }

  findAllPraticienWithSpecialites() {
    this.http.get<Array<Praticien>>(this.chemin +"with-specialites/").subscribe(response => {
      this.praticiens = response;
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
