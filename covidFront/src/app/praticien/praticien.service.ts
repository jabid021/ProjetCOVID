import { Injectable } from '@angular/core';
import {AppConfigService} from "../app-config.service";
import {HttpClient} from "@angular/common/http";
import {Praticien} from "../model/praticien";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

  chemin: string;
  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "praticien/";
    this.load();
  }

  findAll(): Array<Praticien> {
    return null;
  }

  findById(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.chemin + id+"/with-specialite");
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
