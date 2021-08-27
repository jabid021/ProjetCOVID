import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Motif} from "../model/motif";


@Injectable({
  providedIn: 'root'
})
export class MotifHttpService {

  motifs : Array<Motif> = new Array<Motif>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load()
  }

  load() {
    this.http.get<Array<Motif>>(this.appConfigService.backEndUrl + "motif/").subscribe(response => {
      this.motifs = response;
    }, error => console.log(error));
  }

}
