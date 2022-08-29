import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from 'src/models/session';
import { Stagiaire } from 'src/models/stagiaire';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StagiaireService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private auth: AuthService) {}

  public getUser(): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(`${this.apiServerUrl}/api/stagiaire`);
  }

  public getUserSessions(): Observable<Session[]> {
    // return this.http.get<Session[]>(`${this.apiServerUrl}/api/stagiaire/list`);
    const idTraining: number = 2;
    return this.http.get<Session[]>(`${this.apiServerUrl}/api/session/`, {
      params: { idTraining },
    });
  }

  public update(data: Stagiaire): Observable<Stagiaire> {
    return this.http.post<Stagiaire>(
      `${this.apiServerUrl}/api/stagiaire`,
      data
    );
  }

  public desinscription(idSession: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.apiServerUrl}/api/stagiaire/${idSession}`
    );
  }
}
