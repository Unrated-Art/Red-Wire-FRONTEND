import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { Stagiaire } from 'src/models/stagiaire';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  public subs: Subscription[] = [];
  stagiaire!: Stagiaire;

  constructor(
    private stagiaireService: StagiaireService,
    private route: Router
  ) {}

  form = new FormGroup({
    lastName: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    firstName: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.minLength(3), Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    adresse: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    numTelephone: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    entreprise: new FormControl(false),
    coordonneesEntre: new FormControl(null),
  });

  get nom(): any {
    return this.form.get('lastName');
  }
  get prenom(): any {
    return this.form.get('firstName');
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
    return this.form.get('coordonneesEntre');
  }

  ngOnInit(): void {
    const sub = this.stagiaireService.getUser().subscribe({
      next: (s: Stagiaire) => {
        this.stagiaire = s;
        this.nom.setValue(this.stagiaire.nom || '');
        this.prenom.setValue(this.stagiaire.prenom || '');
        this.email.setValue(this.stagiaire.email || '');
        this.mpass.setValue(this.stagiaire.mpass || '');
        this.adresse.setValue(this.stagiaire.adresse || '');
        this.numTelephone.setValue(this.stagiaire.numTelephone || '');
        this.entreprise.setValue(this.stagiaire.entreprise || false);
        this.coordonneesEntre.setValue(this.stagiaire.coordonneesEntre || '');
      },
      error(err: HttpErrorResponse) {
        console.error(err);
      },
    });
    this.subs.push(sub);
  }

  public editUser(): void {
    if (this.form.invalid) {
      console.log('NOT VALID');
      return;
    }
    const data: any = {
      nom: this.nom.value,
      prenom: this.prenom.value,
      email: this.email.value,
      mpass: this.mpass.value,
      adresse: this.adresse.value,
      numTelephone: this.numTelephone.value,
      entreprise: this.entreprise.value,
      coordonneesEntre: this.coordonneesEntre.value,
    };
    console.log('EXECUTE');
    this.stagiaireService.update(data).subscribe({
      next: (_value: Stagiaire) => {
        this.route.navigate(['/profile']);
      },
    });
  }

  public ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
