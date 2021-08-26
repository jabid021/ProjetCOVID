import {Adresse} from "./adresse";

export abstract class Utilisateur {
  id:number;
  version:number;
  nom:string;
  prenom:string;
  email:string;
  motDePasse:string;
  adresse:Adresse;

  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, motDePasse?: string,adresse?:Adresse) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.adresse=adresse;
  }
}
