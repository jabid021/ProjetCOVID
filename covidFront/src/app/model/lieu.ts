import {Practicien} from "./practicien";
import {Creneau} from "./creneau";
import {Adresse} from "./adresse";

export class Lieu
{
  constructor(id?:number,version?:number,nom?:string,virtuel?:boolean,adr?:Adresse,practicien?:Practicien,creneaux?:Array<Creneau>){}
}
