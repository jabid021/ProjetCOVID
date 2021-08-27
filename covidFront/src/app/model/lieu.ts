
import {Creneau} from "./creneau";
import {Adresse} from "./adresse";
import {Praticien} from "./praticien";

export class Lieu
{
  constructor(public id?:number, public version?:number, public nom?:string, public virtuel?:boolean, public adr?:Adresse, public praticien?:Praticien, public creneaux?:Array<Creneau>){}
}
