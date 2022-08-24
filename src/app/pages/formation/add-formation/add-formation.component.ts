import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormationService } from 'src/services/formation.service';

// Formation (model) != des parametres GET/POST
interface FormationType {
  reference: string;
  titref: string;
  lieu: string;
  interFormation: boolean;
  duree: number;
  prerequis: string;
  objectif: string;
  publicVise: string;
  programmeDetaille: string;
  theme: string;
}

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss'],
})
export class AddFormationComponent implements OnInit, OnDestroy {
  sub?: Subscription;

  themeChoices: string[] = [
    'Développement',
    'Big Data, Data Science et IA',
    'Informatique décicionnelle',
    'Bases de données',
    'Réseaux et Télécoms',
    'Cybersécurité',
    'Cloud computing',
    'Virtualisation',
    'Windows et System Center',
    'Linux, Unix, Mac',
    'Solutions collaboratives Microsoft',
    'IBM',
    'SAP',
    'Tests',
    'Développement web et mobilité',
    'IoT, Systèmes embarquées, Robotic Process Automation',
    'DevOps, industrialisation et gestion de production',
    'PAO, CAO, DAO, BIM',
  ];

  addForm = new FormGroup({
    reference: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    interIntra: new FormControl(null, Validators.required),
    duration: new FormControl(null, Validators.required),
    prerequis: new FormControl(null, Validators.required),
    goal: new FormControl(null, Validators.required),
    targetPublic: new FormControl(null, Validators.required),
    details: new FormControl(null, Validators.required),
    theme: new FormControl(null, Validators.required),
  });

  constructor(
    private formationService: FormationService
  ) {}
  ngOnInit(): void {}

  get reference(): any {
    return this.addForm.get('reference');
  }
  get title(): any {
    return this.addForm.get('title');
  }
  get location(): any {
    return this.addForm.get('location');
  }
  get interIntra(): any {
    return this.addForm.get('interIntra');
  }
  get duration(): any {
    return this.addForm.get('duration');
  }
  get prerequis(): any {
    return this.addForm.get('prerequis');
  }
  get goal(): any {
    return this.addForm.get('goal');
  }
  get targetPublic(): any {
    return this.addForm.get('targetPublic');
  }
  get details(): any {
    return this.addForm.get('details');
  }

  get theme(): any {
    return this.addForm.get('theme');
  }

  public submit(): void {
    if (this.addForm.invalid) {
      // return
      console.log('Invalid form');
    }
    const data: FormationType = {
      reference: this.reference.value,
      titref: this.title.value,
      lieu: this.location.value,
      interFormation: Boolean(this.interIntra.value),
      duree: this.duration.value,
      prerequis: this.prerequis.value,
      objectif: this.goal.value,
      publicVise: this.targetPublic.value,
      programmeDetaille: this.details.value,
      theme: this.theme.value,
    };
    this.sub = this.formationService.addFormation(data).subscribe({
      next: (response: any) => {
        console.log(response);
        this.addForm.reset();
      },
      error: (httpErrorResponse) => {
        // this.errorMessage = httpErrorResponse.message;
        alert(httpErrorResponse.message);
      },
      complete: () => {
        console.log(data);
        console.log('DONE!');
      },
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
