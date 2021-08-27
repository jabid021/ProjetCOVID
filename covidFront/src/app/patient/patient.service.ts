import { Injectable } from '@angular/core';
import {Patient} from "../model/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Array<Patient> = new Array<Patient>();

  constructor() {}



  findAll(): Array<Patient> {
    return this.patients;
  }

  findById(id: number): Patient {
    return this.patients.find(patient => patient.id == id);
  }

  create(patient: Patient) {
    let max = 0;
    for (let current of this.patients) {
      if (max < current.id) {
        max = current.id;
      }
    }
    patient.id = ++max;
    patient.version = 0;

    this.patients.push(patient);
  }

  modify(patient: Patient) {
    let find: boolean = false;
    for (var indice = 0; indice < this.patients.length; indice++) {
      if (this.patients[indice].id == patient.id) {
        find = true;
        break;
      }
    }
    if (find) {
      patient.version++;
      this.patients[indice] = patient;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.patients.length; indice++) {
      if (this.patients[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.patients.splice(indice, 1);
    }
  }
}
