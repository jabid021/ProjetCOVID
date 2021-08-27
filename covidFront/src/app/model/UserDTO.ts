import {Utilisateur} from "./utilisateur";

export class UserDTO
{
  constructor(public login?:string,public password?:string,public utilisateur?:Utilisateur, public type?:string) {
  }
}
