import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Motif} from "../model/motif";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MotifHttpService {
  motifs : Array<Motif> = new Array<Motif>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get<Array<Motif>>(this.appConfigService.backEndUrl + "motif/").subscribe(response => {
      this.motifs = response;
    }, error => console.log(error));
  }

  findAll(): Array<Motif> {
    return this.motifs;
  }

  findById(id: number): Observable<Motif> {
    return this.http.get<Motif>(this.appConfigService.backEndUrl + "motif/" + id);
  }

  create(motif: Motif) {
    this.http.post<Motif>(this.appConfigService.backEndUrl + "motif/", motif).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(motif: Motif) {
    this.http.put<Motif>(this.appConfigService.backEndUrl + "motif/" + motif.id, motif).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "motif/" + id);
  }

}
