import {Utilisateur} from "./utilisateur";
import {Lieu} from "./lieu";
import {Creneau} from "./creneau";
import {Motif} from "./motif";
import {Consultation} from "./consultation";
import {Adresse} from "./adresse";
import {Specialite} from "./specialite";

export class Praticien extends Utilisateur {
  matricule:string;
  telephone:string;
  photo:string;
  convention:string;
  carteVitale:boolean;
  cb:boolean;
  cheque:boolean;
  espece:boolean;
  dureeCrenau:number;
  specialites:Array<Specialite>;
  lieux:Array<Lieu>;
  creneaux:Array<Creneau>;
  motifs:Array<Motif>;
  consultations:Array<Consultation>;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, motDePasse?: string,adresse?:Adresse, matricule?: string, telephone?: string, photo?: string, convention?: string, carteVitale?: boolean, cb?: boolean, cheque?: boolean, espece?: boolean, dureeCrenau?: number, specialites?: Array<Specialite>, lieux?: Array<Lieu>, creneaux?: Array<Creneau>, motifs?: Array<Motif>, consultations?: Array<Consultation>) {
    super(id, version, nom, prenom, email, motDePasse,adresse);
    this.matricule = matricule;
    this.telephone = telephone;
    this.photo = photo;
    this.convention = convention;
    this.carteVitale = carteVitale;
    this.cb = cb;
    this.cheque = cheque;
    this.espece = espece;
    this.dureeCrenau = dureeCrenau;
    this.specialites = specialites;
    this.lieux = lieux;
    this.creneaux = creneaux;
    this.motifs = motifs;
    this.consultations = consultations;
  }
}
