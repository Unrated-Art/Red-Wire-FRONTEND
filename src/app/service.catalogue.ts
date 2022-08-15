import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Catalogue } from "./catalogue";
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ServiceCatalogue {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getCatalogues(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>('${this.apiServerUrl}/catalogue/allcatalogue');
  }

  public addCatalogue(catalogue: Catalogue): Observable<Catalogue> {
    return this.http.post<Catalogue>('$(this.apiServerUrl}/catalogue/add', catalogue);
  }
}
