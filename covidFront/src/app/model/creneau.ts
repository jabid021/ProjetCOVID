
import {Lieu} from "./lieu";
import {Consultation} from "./consultation";
import {Praticien} from "./praticien";

export class Creneau
{
  constructor(public id?:number, public version?:number, public dateCreneau?:Date, public heureCreneau?:Date, public duree?:number, public dispo?:boolean, public lieu?:Lieu, public practicien?:Praticien, public consultation?:Consultation) {

  }

}
