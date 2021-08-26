import {Consultation} from "./consultation";
import {Praticien} from "./praticien";

export class Motif
{
  constructor(public id?:number, public version?:number, public libelle?:string, public nbCreneau?:number, public consultations?:Array<Consultation>, public praticien?:Praticien) {}
}
