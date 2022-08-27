import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthRegisterType } from 'src/models/auth-register';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    passwordConfirmation: new FormControl(null, Validators.required),
  });

  @Output() registerEvent = new EventEmitter<AuthRegisterType>();

  constructor() {}

  ngOnInit(): void {}

  public userRegister(): void {
    if (this.form.invalid) {
      return;
    }
    const data: AuthRegisterType = {
      firstName: this.form.get('email')?.value,
      lastName: this.form.get('email')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('email')?.value,
      passwordConfirmation: this.form.get('email')?.value,
    };
    this.registerEvent.emit(data);
  }
}
