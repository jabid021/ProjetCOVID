import {Praticien} from "./praticien";
export class Specialite {
  constructor(public id?:number,public version?: number,public nom?:string,public description?:string,public praticiens?:Array<Praticien>)
  {   }
}
