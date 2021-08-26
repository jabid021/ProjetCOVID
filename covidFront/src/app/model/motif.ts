import {Consultation} from "./consultation";
import {Practicien} from "./practicien";

export class Motif
{
  constructor(id?:number,version?:number,libelle?:string,nbCreneau?:number,consultations?:Array<Consultation>,practicien?:Practicien) {}
}
