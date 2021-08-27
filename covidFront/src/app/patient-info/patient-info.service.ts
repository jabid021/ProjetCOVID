import { Injectable } from '@angular/core';
import {Patient} from "../model/patient";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {
  patients: Array<Patient> = new Array<Patient>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { this.load();}

  findAll(): Array<Patient> {
    return this.patients;
  }

  findById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.appConfigService.backEndUrl + "patient/" + id);
  }

  create(patient: Patient) {
    this.http.post<Patient>(this.appConfigService.backEndUrl + "patient/", patient).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(patient: Patient) {
    this.http.put<Patient>(this.appConfigService.backEndUrl + "patient/" + patient.id, patient).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Patient>>(this.appConfigService.backEndUrl + "patient/").subscribe(response => {
      this.patients = response;
    }, error => console.log(error));
  }
}


