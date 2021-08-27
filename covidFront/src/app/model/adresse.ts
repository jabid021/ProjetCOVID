export class Adresse {
  rue:string;
  codePostal:string;
  ville:string;
  complement: string;

  constructor(rue?: string, complement?: string, codePostal?: string, ville?: string) {
    this.rue = rue;
    this.codePostal = codePostal;
    this.ville = ville;
  }
}
