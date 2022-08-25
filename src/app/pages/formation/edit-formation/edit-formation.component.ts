import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/services/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss'],
})
export class EditFormationComponent implements OnInit {
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

  updatedF!: Formation;
  sub?: Subscription;
  fToUpdate!: Subscription;
  identifiant!: number;

  private routeSub: Subscription;
  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      this.identifiant = Number(params['id']);
    });

    console.log('Got the [id] from the url: ' + this.identifiant);
  }

  editForm = new FormGroup({
    //idFormation: new FormControl(null, Validators.nullValidator), //
    ref: new FormControl(null, Validators.required), //this.updatedF.reference
    title: new FormControl(null, Validators.required), //this.updatedF.titref
    location: new FormControl(null, Validators.required), //this.updatedF.lieu
    interIntra: new FormControl(null, Validators.required), //this.updatedF.interFormation
    duration: new FormControl(null, [Validators.required, Validators.min(1)]), //this.updatedF.duree
    prerequis: new FormControl(null, Validators.required), //this.updatedF.prerequis
    goal: new FormControl(null, Validators.required), //this.updatedF.objectif
    targetPublic: new FormControl(null, Validators.required), //this.updatedF.publicVise
    details: new FormControl(null, Validators.required), //this.updatedF.programmeDetaille
    theme: new FormControl(null, Validators.required), //this.updatedF.themes
  });

  ngOnInit(): void {}

  // get id(): any { //=> id : is AUTO-INCREMENTED
  //   return this.editForm.get('idFormation');
  // }
  get ref(): any {
    return this.editForm.get('ref');
  }
  get title(): any {
    return this.editForm.get('title');
  }
  get location(): any {
    return this.editForm.get('location');
  }
  get interIntra(): any {
    return this.editForm.get('interIntra');
  }
  get duration(): any {
    return this.editForm.get('duration');
  }
  get prerequis(): any {
    return this.editForm.get('prerequis');
  }
  get goal(): any {
    return this.editForm.get('goal');
  }
  get targetPublic(): any {
    return this.editForm.get('targetPublic');
  }
  get details(): any {
    return this.editForm.get('details');
  }
  get theme(): any {
    return this.editForm.get('theme');
  }

  editTraining(): void {
    if (this.editForm.invalid) {
      // return
      console.log('Invalid form');
    }

    const dataU: Formation = {
      reference: String(this.ref.value),
      titref: String(this.title.value),
      lieu: String(this.location.value),
      interFormation: Boolean(this.interIntra.value),
      duree: Number(this.duration.value),
      prerequis: String(this.prerequis.value),
      objectif: String(this.goal.value),
      publicVise: String(this.targetPublic.value),
      programmeDetaille: String(this.details.value),
      //themes
    };
    this.fToUpdate = this.formationService
      .getFormationById(this.identifiant)
      .subscribe({
        next: (formation: Formation) => {
          formation = dataU;
          this.formationService
            .updateFormation(formation, this.identifiant)
            .subscribe({
              next(updatedTraining: Formation) {
                console.log('UPDATE OK=> ' + updatedTraining);
              },
              error(httpErrorResponse) {
                alert('failed to update training due to: ' + httpErrorResponse);
              },
            });
          console.log('id of the training to update: ' + formation.idFormation);
          this.editForm.reset();
        },
        error: (httpErrorResponse) => {
          alert('GetTrainingById failed due to: ' + httpErrorResponse.message);
        },
        complete: () => {
          console.error('BLABLABLA in COMPLETE of parentSubscribe');
          console.log(
            'newFContentDetails:' +
              dataU.reference +
              ';' +
              dataU.lieu +
              ';' +
              dataU.duree +
              ';' +
              dataU.interFormation +
              ';' +
              dataU.programmeDetaille +
              ';' +
              dataU.objectif
          );
          console.log('newFContent:' + dataU);
          console.log('DONE!');
          this.editForm.reset();
        },
      });

    // Process editTraining data here
    // alert("edit Training submitted => va voir comment l'enregistrer dans la base :p");
    // console.info(this.editForm.get("ref"));
    // //console.info('ref= '+this.updatedF.reference);
    // //this.formation.reference=this.addTrainingForm.get("reference");
    // //this.formationService.addFormation(this.addTrainingForm.value);
    // console.warn('Training update loading..', dataU.reference);
    // this.editForm.reset();
  }

  public showMessage(message: string) {
    alert(message);
  }

  // ngOnDestroy(): void {
  //   this.updatedF?.unsubscribe();
  // }
}
