import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRegisterType } from 'src/models/auth-register';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    passwordConfirmation: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  @Output() registerEvent = new EventEmitter<AuthRegisterType>();

  constructor() {}

  ngOnInit(): void {}

  get firstName(): any {
    return this.form.get('firstName');
  }
  get lastName(): any {
    return this.form.get('lastName');
  }
  get email(): any {
    return this.form.get('email');
  }
  get password(): any {
    return this.form.get('password');
  }
  get passwordConfirmation(): any {
    return this.form.get('passwordConfirmation');
  }

  public resetForm() {
    this.form.reset();
  }

  public userRegister(): void {
    if (this.form.invalid) {
      return;
    }
    const data: AuthRegisterType = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      passwordConfirmation: this.passwordConfirmation.value,
    };
    this.registerEvent.emit(data);
  }
}
