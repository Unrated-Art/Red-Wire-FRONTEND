import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { Stagiaire } from 'src/models/stagiaire';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  public subs: Subscription[] = [];
  stagiaire!: Stagiaire;

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
      error: (err: HttpErrorResponse) => {
        console.error(err);
      },
    });
    this.subs.push(sub);
  }

  public ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
