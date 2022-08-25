import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Session } from 'src/models/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.apiServerUrl}/api/session`);
  }

  public getSession(id: number): Observable<Session> {
    return this.http.get<Session>(`${this.apiServerUrl}/api/session/${id}`);
  }

  public addSession(dataSession: any): Observable<Session> {
    return this.http.post<Session>(
      `${this.apiServerUrl}/api/session`,
      dataSession
    );
  }

  public editSession(session: Session): Observable<Session> {
    return this.http.put<Session>(
      `${this.apiServerUrl}/api/session/${session.idSession}`,
      session
    );
  }

  public removeSession(id: number): Observable<Session> {
    return this.http.delete<Session>(`${this.apiServerUrl}/api/session/${id}`);
  }
}
