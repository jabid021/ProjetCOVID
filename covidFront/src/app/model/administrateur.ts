
import {Utilisateur} from "./utilisateur";
import {Praticien} from "./praticien";
import {Adresse} from "./adresse";

export class Patient extends Utilisateur {
  praticiens:Array<Praticien>


  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, motDePasse?: string, adresse?: Adresse, praticiens?: Array<Praticien>) {
    super(id, version, nom, prenom, email, motDePasse, adresse);
    this.praticiens = praticiens;
  }
}
