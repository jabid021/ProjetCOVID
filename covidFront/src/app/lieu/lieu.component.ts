import { Component, OnInit } from '@angular/core';
import {LieuHttpService} from "./lieuHttp.service";
import {Lieu} from "../model/lieu";
import {Adresse} from "../model/adresse";

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.scss']
})
export class LieuComponent implements OnInit {

  lieuForm: Lieu = null;
  check : boolean = false;

  constructor(private lieuService : LieuHttpService) { }

  ngOnInit(): void {
  }

  checkVirtuel(event:any)
  {
    if(event.checked) {this.lieuForm.virtuel = true}
    else {this.lieuForm.virtuel = false}
    console.log(this.lieuForm);
  }

  checkPhysique(event:any)
  {
    if(event.checked) {this.check = true}
    else {this.check = false}
  }

  add() {
    this.lieuForm = new Lieu();
    this.lieuForm.adr = new Adresse ();
  }

  edit(id: number) {
    this.lieuService.findById(id).subscribe(resp => {
      this.lieuForm = resp;
      if (!this.lieuForm.adr) {
        this.lieuForm.adr = new Adresse();
      }
    })
  }

  save() {
    if (!this.lieuForm.id) {
      this.lieuService.create(this.lieuForm);
    } else {
      this.lieuService.modify(this.lieuForm);
    }
    this.lieuForm = null;
  }

  cancel() {
    this.lieuForm = null;
  }

}
