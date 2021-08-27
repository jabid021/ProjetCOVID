import {Creneau} from "./creneau";
import {Motif} from "./motif";
import {Patient} from "./patient";
import {Praticien} from "./praticien";

export class Consultation
{
  constructor(public id?:number, public version?:number,public statut?:string,public codification?:string,public creneaux?:Array<Creneau>,public motif?:Motif,public patient?:Patient,public praticien?:Praticien) {
  }
}
