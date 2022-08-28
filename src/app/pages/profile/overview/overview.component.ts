import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null)
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

  constructor() { }

  ngOnInit(): void {
  }

}
