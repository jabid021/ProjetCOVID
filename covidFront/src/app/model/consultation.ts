import {Creneau} from "./creneau";
import {Motif} from "./motif";
import {Patient} from "./patient";
import {Praticien} from "./praticien";

export class Consultation
{
  constructor(id?:number,version?:number,statut?:string,codification?:string,creneaux?:Array<Creneau>,motif?:Motif,patient?:Patient,practicien?:Praticien) {
  }
}
