import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Session } from '../../models/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSessions(idTraining?: number | undefined): Observable<Session[]> {
    return this.http.get<Session[]>(
      `${this.apiServerUrl}/api/session/`,
      !!idTraining ? { params: { idTraining } } : {}
    );
  }

  public getSession(idSession: number): Observable<Session> {
    return this.http.get<Session>(
      `${this.apiServerUrl}/api/session/${idSession}`
    );
  }

  public addSession(
    session: Session,
    idFormation: number
  ): Observable<Session> {
    return this.http.post<Session>(
      `${this.apiServerUrl}/api/session/add/${idFormation}`,
      session
    );
  }

  public editSession(session: Session): Observable<Session> {
    return this.http.put<Session>(
      `${this.apiServerUrl}/api/session/${session.idSession}`,
      session
    );
  }

  public removeSession(idSession: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/session/${idSession}`
    );
  }
}
