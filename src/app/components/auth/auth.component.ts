import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLoginType } from 'src/models/auth-login';
import { AuthRegisterType } from 'src/models/auth-register';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  public userLogin(eventData: AuthLoginType) {
    // this.router.navigate(["/dashboard"])
    this.authService.login(eventData)
  }

  public userRegister(eventData: AuthRegisterType) {
    this.authService.register(eventData)
  }
}
