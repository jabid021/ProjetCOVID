import { Component, OnInit } from '@angular/core';
import {Patient} from "../model/patient";
import {PatientInfoService} from "./patient-info.service";

@Component({
  selector: 'patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  patient : Patient=new Patient();
  patientInfoForm: Patient = null;

  constructor(private patientInfoService: PatientInfoService) {

  }

  ngOnInit(): void {
    this.find(1);
  }

  find(id : number){
    this.patientInfoService.findById(id).subscribe(response=>
      {
        this.patient=response;
        console.log(this.patient);
      },
      error=>console.log(error));
  }

  edit(id: number) {
    this.patientInfoService.findById(id).subscribe(resp => {
      this.patientInfoForm = resp;
    })
  }

  save() {
      this.patientInfoService.modify(this.patientInfoForm);
  }

  cancel() {
    this.patientInfoForm = null;
  }
}
