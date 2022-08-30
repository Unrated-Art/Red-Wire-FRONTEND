import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginType } from 'src/models/auth-login';
import { AuthRegisterType } from 'src/models/auth-register';
import { AuthToken } from 'src/models/auth-token';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'redwire_auth_token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: AuthToken;

  get token(): string {
    return localStorage.getItem(this.TOKEN_NAME)?.toString() || '';
  }

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) {
    const token = this.token;
    if (!!token) {
      this.user = this.getUser(token);
    }
    this._isLoggedIn$.next(!!this.user);
  }

  public logout(): void {
    this.apiLogout({ token: this.token }).subscribe({
      next: () => {
        localStorage.removeItem(this.TOKEN_NAME);
        this._isLoggedIn$.next(false);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('ERROR: ', err);
      },
    });
  }

  public login(data: AuthLoginType): Observable<any> {
    return this.apiLogin(data).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem(this.TOKEN_NAME, response.token);
          this.user = this.getUser(response.token);
          this._isLoggedIn$.next(true);
          switch (this.user.role) {
            case 'ADMIN':
              this.router.navigate(['dashboard']);
              break;
            case 'STAGIAIRE':
              this.router.navigate(['profile']);
              break;
            default:
              break;
          }
        }
      })
    );
  }

  private getUser(token: string): AuthToken {
    return JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString()
    ) as AuthToken;
  }

  public register(data: AuthRegisterType): Observable<any> {
    return this.apiRegister(data);
  }

  public apiLogout(data: object): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/logout`, data);
  }

  public apiLogin(data: AuthLoginType): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/login`, data);
  }

  public apiRegister(data: AuthRegisterType): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/register`, data);
  }
}
