import {Component, OnInit} from '@angular/core';
import {UserDTO} from "../model/UserDTO";
import {ConnexionService} from "./connexion.service";
import {SessionService} from "../session.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  userForm: UserDTO = new UserDTO();

  constructor(private connexionService: ConnexionService, private sessionService: SessionService) {

  }

  ngOnInit(): void {
  }

  connexion() {
    this.connexionService.authentification(this.userForm).subscribe(resp => {
      this.userForm = resp;
      this.sessionService.setUser(resp);
    }, error => {
      console.log("Probleme d'identification");
    });
  }

}
