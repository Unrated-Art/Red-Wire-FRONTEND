import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public userLogin(eventData: any) {
    this.router.navigate(['/dashboard']);
    // this.authService.login(eventData)
  }

  public userRegister(eventData: any) {
    // this.authService.register(eventData)
  }
}
