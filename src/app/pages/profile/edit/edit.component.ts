import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private stagiaireService: StagiaireService) {}

  form = new FormGroup({
    lastName: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
    firstName: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.minLength(5), Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    adresse: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
    numTelephone: new FormControl(null, [
      Validators.minLength(5),
      Validators.required,
    ]),
    entreprise: new FormControl(false),
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

  ngOnInit(): void {}

  public editUser(): void {
    if (this.form.invalid) {
      return;
    }
    const data: any = {
      nom: this.nom.value,
      prenom: this.prenom.value,
      adresse: this.adresse.value,
      email: this.email.value,
      numTelephone: this.numTelephone.value,
      mpass: this.mpass.value,
      entreprise: this.entreprise.value,
      coordonneesEntre: this.coordonneesEntre.value,
    };
    this.stagiaireService.update(data);
  }
}
