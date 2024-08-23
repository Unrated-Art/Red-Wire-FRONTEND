import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Formation } from 'src/models/Formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private apiServerUrl = environment.production ? '' : environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.apiServerUrl}/api/training/all`);
  }

  public getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(
      `${this.apiServerUrl}/api/training/findbyId/${id}`
    );
  }

  public getFormationByReference(ref: string): Observable<Formation> {
    return this.http.get<Formation>(
      `${this.apiServerUrl}/api/training/findRef/${ref}`
    );
  }

  public getFormationsByKeyword(keyword: string): Observable<Formation[]> {
    return this.http.get<Formation[]>(
      `${this.apiServerUrl}/api/training/findKeyword/${keyword}`
    );
  }

  public addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(
      `${this.apiServerUrl}/api/training/add`,
      JSON.stringify(formation),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  public updateFormation(
    formation: Formation,
    id: number
  ): Observable<Formation> {
    return this.http.put<Formation>(
      `${this.apiServerUrl}/api/training/update/${id}`,
      JSON.stringify(formation),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  public deleteFormation(formationId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/training/delete/${formationId}`
    ); //verif "formationId" ou "id"?
  }
}
