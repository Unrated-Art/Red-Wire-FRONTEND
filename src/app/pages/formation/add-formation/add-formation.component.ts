import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/services/formation.service';

// Formation (model) != des parametres GET/POST
interface FormationType {
  reference: string
  titref: string
  lieu: string
  interFormation: boolean
  duree: number
  prerequis: string
  objectif: string
  publicVise: string
  programmeDetaille: string
}

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss'],
})
export class AddFormationComponent implements OnInit, OnDestroy {
  sub?: Subscription

  form = new FormGroup({
    reference: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    interIntra: new FormControl(null, Validators.required),
    duration: new FormControl(null, Validators.required),
    prerequis: new FormControl(null, Validators.required),
    goal: new FormControl(null, Validators.required),
    targetPublic: new FormControl(null, Validators.required),
    details: new FormControl(null, Validators.required),
    // theme: new FormControl(null, Validators.required),
  })

  constructor(private formationService: FormationService, private router: Router) {}
  ngOnInit(): void {}

  get reference(): any {
    return this.form.get('reference')
  }
  get title(): any {
    return this.form.get('title')
  }
  get location(): any {
    return this.form.get('location')
  }
  get interIntra(): any {
    return this.form.get('interIntra')
  }
  get duration(): any {
    return this.form.get('duration')
  }
  get prerequis(): any {
    return this.form.get('prerequis')
  }
  get goal(): any {
    return this.form.get('goal')
  }
  get targetPublic(): any {
    return this.form.get('targetPublic')
  }
  get details(): any {
    return this.form.get('details')
  }

  public submit(): void {
    if (this.form.invalid) {
      // return
       console.log("Invalid form");
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
    }
    this.sub = this.formationService.addFormation(data).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (httpErrorResponse) => {
        // this.errorMessage = httpErrorResponse.message;
        alert(httpErrorResponse.message);
      },
      complete: () => {
        console.log(data);
        console.log('DONE!')
      },
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
