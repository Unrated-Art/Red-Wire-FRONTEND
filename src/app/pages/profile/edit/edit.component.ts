import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private stagiaireService: StagiaireService) { }

  form = new FormGroup({
    firstName: new FormControl(null, [Validators.minLength(5)]),
    lastName: new FormControl(null, [Validators.minLength(5)]),
    email: new FormControl(null, [Validators.minLength(5), Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });

  get firstName(): any {
    return this.form.get('firstName')
  }
  get lastName(): any {
    return this.form.get('lastName')
  }
  get email(): any {
    return this.form.get('email')
  }
  get password(): any {
    return this.form.get('password')
  }

  ngOnInit(): void {}

  public editUser(): void {
    if (this.form.invalid) {
      return;
    }
    const data: any = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    };
    this.stagiaireService.update(data);
  }  
}
