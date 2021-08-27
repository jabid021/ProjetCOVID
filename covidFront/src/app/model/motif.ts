import {Consultation} from "./consultation";
import {Praticien} from "./praticien";

export class Motif {
  id: number;
  version: number;
  libelle: string;
  nbCreneau: number;
  consultations: Array<Consultation>;
  praticien: Praticien;

  constructor(id?:number,version?:number,libelle?:string,nbCreneau?:number,consultations?:Array<Consultation>,praticien?:Praticien) {}
}
