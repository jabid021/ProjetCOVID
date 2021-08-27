import { Component, OnInit } from '@angular/core';
import {PatientRdvAVenirService} from "./patient-rdv-avenir.service";
import {Consultation} from "../model/consultation";

@Component({
  selector: 'app-patient-rdv-avenir, [app-patient-rdv-avenir]',
  templateUrl: './patient-rdv-avenir.component.html',
  styleUrls: ['./patient-rdv-avenir.component.scss']
})
export class PatientRdvAVenirComponent implements OnInit {

  ConsultationForm: Consultation = null;

  constructor(private patientRdvAVenirService: PatientRdvAVenirService) { }

  ngOnInit(): void {
  }

  list(): Array<Consultation> {
    return this.patientRdvAVenirService.findAll();
  }

  add() {
    this.ConsultationForm = new Consultation();
  }

  edit(id: number) {
    this.patientRdvAVenirService.findById(id).subscribe(resp => {
      this.ConsultationForm = resp;
    })
  }

  save() {
    if (this.ConsultationForm.id) {
      this.patientRdvAVenirService.modify(this.ConsultationForm);
    } else {
      this.patientRdvAVenirService.create(this.ConsultationForm);
    }
    this.ConsultationForm = null;
  }

  delete(id: number) {
    this.patientRdvAVenirService.deleteById(id).subscribe(resp => {
      this.patientRdvAVenirService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.ConsultationForm = null;
  }
}

