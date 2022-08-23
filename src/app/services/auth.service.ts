import { Injectable } from '@angular/core';
import { AuthLoginType } from 'src/models/auth-login';
import { AuthRegisterType } from 'src/models/auth-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(data: AuthLoginType) {
    console.info(data)
  }
  public register(data: AuthRegisterType) {
    console.info(data)
  }
}
