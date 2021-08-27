import { Component, OnInit } from '@angular/core';
import {MotifHttpService} from "./motifHttp.service";
import {Motif} from "../model/motif";


@Component({
  selector: 'app-motif',
  templateUrl: './motif.component.html',
  styleUrls: ['./motif.component.scss']
})
export class MotifComponent implements OnInit {

  motifForm: Motif = new Motif();
  check : boolean = false;

  constructor(private motifService : MotifHttpService) { }

  ngOnInit(): void {
  }

  add() {
    this.motifForm = new Motif();
  }

  edit(id: number) {
    this.motifService.findById(id).subscribe(resp => {
      this.motifForm = resp;
    })
  }

  save() {
    if (!this.motifForm.id) {
      this.motifService.create(this.motifForm);
    } else {
      this.motifService.modify(this.motifForm);
    }
    this.motifForm = new Motif();
  }

  cancel() {
    this.motifForm = new Motif();
  }

  list(): Array<Motif> {
    return this.motifService.findAll();
  }

  delete(id: number) {
    this.motifService.deleteById(id).subscribe(resp => {
      this.motifService.load();
    }, error => console.log(error));
  }
}
