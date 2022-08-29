import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private stagiaireService: StagiaireService) {}

  form = new FormGroup({
    lastName: new FormControl(null),
    firstName: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    adresse: new FormControl(null),
    numTelephone: new FormControl(null),
    entreprise: new FormControl(null),
    coordonneesEntre: new FormControl(null),
  });

  get nom(): any {
    return this.form.get('firstName');
  }
  get prenom(): any {
    return this.form.get('lastName');
  }
  get email(): any {
    return this.form.get('email');
  }
  get mpass(): any {
    return this.form.get('password');
  }
  get adresse(): any {
    return this.form.get('adresse');
  }
  get numTelephone(): any {
    return this.form.get('numTelephone');
  }
  get entreprise(): any {
    return this.form.get('entreprise');
  }
  get coordonneesEntre(): any {
    return this.form.get('coordonnees');
  }

  ngOnInit(): void {
    this.stagiaireService.getUser();
  }
}
