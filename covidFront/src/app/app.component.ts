import { Component } from '@angular/core';
import {SessionService} from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidFront';
  connected:boolean=false;


  constructor(private sessionService: SessionService) {
  }

  isConnected(): boolean {
    return this.sessionService.user != null;
  }

  isType(type:string): boolean {
    return this.sessionService.type == type;
  }

  getType(): string {
    return this.sessionService.type;
  }
}
