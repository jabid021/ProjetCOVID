import { Component, OnInit } from '@angular/core';
import {Patient} from "../model/patient";
import {PatientInfoService} from "./patient-info.service";

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
patientInfoForm: Patient = null;

  constructor(private patientInfoService: PatientInfoService) {

  }

  ngOnInit(): void {
  }

  list(): Array<Patient> {
    return this.patientInfoService.findAll();
  }

  add() {
    this.patientInfoForm = new Patient();
  }

  edit(id: number) {
    this.patientInfoService.findById(id).subscribe(resp => {
      this.patientInfoForm = resp;
    })
  }

  save() {
    if (this.patientInfoForm.id) {
      this.patientInfoService.modify(this.patientInfoForm);
    } else {
      this.patientInfoService.create(this.patientInfoForm);
    }

    this.patientInfoForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  delete(id: number) {
    this.patientInfoService.deleteById(id).subscribe(resp => {
      this.patientInfoService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.patientInfoForm = null;
  }
}
