import {Creneau} from "./creneau";
import {Adresse} from "./adresse";
import {Praticien} from "./praticien";

export class Lieu {
  id: number;
  version : number;
  nom: string;
  virtuel : boolean;
  adr: Adresse;
  praticien: Praticien;
  creneaux : Array<Creneau>;



  constructor(id?:number,version?:number,nom?:string,virtuel?:boolean,adr?:Adresse,praticien?:Praticien,creneaux?:Array<Creneau>)
  {

  }
}
