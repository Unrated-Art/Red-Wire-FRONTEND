import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginType } from 'src/models/auth-login';
import { AuthRegisterType } from 'src/models/auth-register';
import { AuthToken } from 'src/models/auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('redwire_auth')
    this._isLoggedIn$.next(!!token)
  }

  public logout(): void {
    const token: string = localStorage.getItem('redwire_auth') || ''
    this.apiLogout({token: token}).subscribe({
      next: () => {
        localStorage.removeItem('redwire_auth')
        this._isLoggedIn$.next(false)
        this.router.navigate(['/'])
      },
      error: (err: any) => {
        console.error('ERROR: ', err)
      }
    })
  }

  public login(data: AuthLoginType): Observable<any> {
    return this.apiLogin(data).pipe(
      tap((response: AuthToken) => {
        localStorage.setItem('redwire_auth', response.token)
        this._isLoggedIn$.next(true)
      })
    )
  }

  public register(data: AuthRegisterType): Observable<any> {
    return this.apiRegister(data)
  }

  public apiLogout(data: object): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/logout`, data)
  }

  public apiLogin(data: AuthLoginType): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/login`, data)
  }

  public apiRegister(data: AuthRegisterType): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/register`, data)
  }

  public apiGetUser(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/api/auth/user`)
  }
}
