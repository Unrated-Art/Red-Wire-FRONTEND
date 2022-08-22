import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from 'src/models/catalogue';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCatalogues(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(`${this.apiServerUrl}/api/catalogue/all`);
  }

  public addCatalogue(catalogue: Catalogue): Observable<Catalogue> {
    return this.http.post<Catalogue>(
      `${this.apiServerUrl}/api/catalogue/add`,
      catalogue
    );
  }
}
