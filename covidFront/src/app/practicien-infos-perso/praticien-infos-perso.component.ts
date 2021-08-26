import { Component, OnInit } from '@angular/core';
import {Praticien} from "../model/praticien";
import {PraticienService} from "../praticien/praticien.service";
import {Adresse} from "../model/adresse";
import {Specialite} from "../model/specialite";


@Component({
  selector: 'praticien-infos-perso',
  templateUrl: './praticien-infos-perso.component.html',
  styleUrls: ['./praticien-infos-perso.component.scss']
})
export class PraticienInfosPersoComponent implements OnInit {

  praticien: Praticien = new Praticien();
  praticienForm: Praticien = null;
  constructor(private praticienService: PraticienService) {
  }

  ngOnInit(): void {
    
  }

  find() {
    let id=1;
    this.praticienService.findById(id).subscribe(response=>
      {
        this.praticien=response;
        this.praticien=new Praticien();
        if(this.praticien.adresse==null)
        {
          this.praticien.adresse=new Adresse();
        }
        console.log(response);
      },
      error=>console.log(error));
  }

  edit(id: number) {
       this.praticienForm=new Praticien(this.praticien.id,this.praticien.version,this.praticien.nom,this.praticien.prenom,this.praticien.email,this.praticien.motDePasse, this.praticien.adresse,this.praticien.matricule,this.praticien.telephone,this.praticien.photo,this.praticien.convention,this.praticien.carteVitale,this.praticien.cb,this.praticien.cheque, this.praticien.espece,this.praticien.dureeCrenau,this.praticien.specialites,this.praticien.lieux,this.praticien.creneaux,this.praticien.motifs);
        if(this.praticienForm.adresse==null) {
          this.praticienForm.adresse = new Adresse();
        }
  }

  save() {

      this.praticienService.modify(this.praticienForm);
  }

  checkSpecialite(specialite:Specialite,event:any)
  {
    if(event.checked) {
      this.praticienForm.specialites.push(specialite);
    }
    else
    {
      this.removeSpecialite(specialite.id);
    }
  }

  removeSpecialite(id:number)
  {
    let find: boolean = false;
    for (var indice = 0; indice < this.praticienForm.specialites.length; indice++) {
      if (this.praticienForm.specialites[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.praticienForm.specialites.splice(indice, 1);
    }
  }


  cancel() {
    this.praticienForm = null;
  }

}
