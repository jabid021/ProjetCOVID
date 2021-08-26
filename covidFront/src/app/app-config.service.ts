import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  backEndUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  findAllConvention(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "convention");
  }
  findAllStatut(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.backEndUrl + "statut");
  }
}
