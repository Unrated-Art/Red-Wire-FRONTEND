import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLoginType } from 'src/models/auth-login';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  @Output() loginEvent = new EventEmitter<AuthLoginType>();

  constructor() {}

  ngOnInit(): void {}

  public userLogin(): void {
    if (this.form.invalid) {
      return;
    }
    const data: AuthLoginType = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    this.loginEvent.emit(data);
  }
}
