import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  public userLogin(eventData: any) {
    // this.authService.login(eventData)
  }

  public userRegister(eventData: any) {
    // this.authService.register(eventData)
  }
}
