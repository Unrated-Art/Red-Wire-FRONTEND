import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLoginType } from 'src/models/auth-login';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  @Output() loginEvent = new EventEmitter<AuthLoginType>();

  constructor() { }

  ngOnInit(): void {
  }

  get email(): any {
    return this.form.get('email');
  }
  get password(): any {
    return this.form.get('password');
  }

  public userLogin(): void {
    if (this.form.invalid) {
      return
    }
    const data: AuthLoginType = {
      email: this.email?.value,
      password: this.password?.value
    }
    this.loginEvent.emit(data)
  }
}
