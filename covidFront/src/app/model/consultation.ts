import {Creneau} from "./creneau";
import {Motif} from "./motif";
import {Practicien} from "./practicien";
import {Patient} from "./patient";

export class Consultation
{
  constructor(id?:number,version?:number,statut?:string,codification?:string,creneaux?:Array<Creneau>,motif?:Motif,patient?:Patient,practicien?:Practicien) {
  }
}
