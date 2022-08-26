import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginType } from 'src/models/auth-login';
import { AuthRegisterType } from 'src/models/auth-register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) {}

  public login(data: AuthLoginType): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/login`, data)
  }

  public register(data: AuthRegisterType): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/register`, data)
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/api/auth/user`)
  }
}
