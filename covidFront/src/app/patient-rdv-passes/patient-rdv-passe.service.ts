import { Injectable } from '@angular/core';
import {Patient} from "../model/patient";
import {Consultation} from "../model/consultation";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class PatientRdvPasseService {

  consultations: Array<Consultation> = new Array<Consultation>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.consultations.push(new Consultation(1, 0, "", "", null));
    this.consultations.push(new Consultation(2, 0, "", "", null));
    this.consultations.push(new Consultation(3, 0, "", "", null));

  }

  findAll(): Array<Consultation> {
    return this.consultations;
  }

  findById(id: number): Observable<Consultation> {
    return this.http.get<Consultation>(this.appConfigService.backEndUrl + "consultation/" + id);
  }

  //Changer le statut de la consultation (Confirmé, Annulé)
  changeStatut(id: number){

  }

  create(consultation: Consultation) {
    this.http.post<Consultation>(this.appConfigService.backEndUrl + "consultation/", consultation).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(consultation: Consultation) {
    this.http.put<Consultation>(this.appConfigService.backEndUrl + "consultation/" + consultation.id, consultation).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "consultation/" + id);
  }

  load() {
    this.http.get<Array<Consultation>>(this.appConfigService.backEndUrl + "consultation/").subscribe(response => {
      this.consultations = response;
    }, error => console.log(error));
  }
}
