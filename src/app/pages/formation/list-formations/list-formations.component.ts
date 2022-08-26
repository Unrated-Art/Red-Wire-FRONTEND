import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { NgForm } from '@angular/forms';
import { Formation } from 'src/models/formation';
import { Theme } from 'src/models/theme';

@Component({
  selector: 'app-formation-list',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.scss'],
})
export class ListFormationsComponent implements OnInit {
  public formations!: Formation[];
  public editFormation!: Formation;
  public deleteFormation!: Formation;
  allThemes?: Theme[];

  openAccordion = ([] = [false]);

  errorMessage?: HttpErrorResponse;
  noTrainingsFound?: string | null;

  isHidden = true;

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.getFormations();
    this.getThemes();
  }

  public getThemes(): void {
    for (var f in this.formationService.getFormations()) {
      console.log(f);
    }
  }

  public showMessage(idBtn: string): void {
    alert(idBtn);
    //alert(document.getElementById("idBtn")?.innerText);
  }

  public getFormations(): void {
    this.formationService.getFormations().subscribe({
      next: (response: Formation[]) => {
        this.formations = response;
        console.log(this.formations);
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
      complete: () => console.log('DONE!'),
    });
  }

  public getAllChapiters(): void {
    // Count (2)
    // this.chapters: Chapters[] = this.serviceChapters.getAllChapiters();
    // Count (3)
  }

  public onAddFormation(addForm: NgForm): void {
    document.getElementById('add-training-form')!.click();
    this.formationService.addFormation(addForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.getFormations();
        addForm.reset();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
        addForm.reset();
      },
    });
  }

  // public onUpdateFormation(formation: Formation): void {
  //   this.formationService.updateFormation(formation).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.getFormations();
  //     },
  //     error: (httpErrorResponse) => {
  //       this.errorMessage = httpErrorResponse.message;
  //       alert(this.errorMessage);
  //     },
  //   });
  // }

  public onDeleteFormation(formationId: number): void {
    this.formationService.deleteFormation(formationId).subscribe({
      next: (response) => {
        console.log(response);
        this.getFormations();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse;
        alert(this.errorMessage);
      },
    });
  }

  public searchFormations(key: string): void {
    console.log(key);

    const results: Formation[] = [];
    for (const f of this.formations) {
      if (!key) {
        this.getFormations();
      }
      if (
        f.reference.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.titref.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.lieu.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.prerequis.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.objectif.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.publicVise.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.programmeDetaille.toLowerCase().indexOf(key.toLowerCase()) !== -1
        // ||
        // (f.themes.length !== 0 &&
        //   f.themes.forEach((t) => {
        //     t.nomTheme.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        //   })) //#!TODO: vérifier dernière condition (avec thème)??
      ) {
        results.push(f);
        console.log(
          'on a trouvé une/des formations correspondant à vos critères de recherche! '
        );
        this.formations = results;
        this.noTrainingsFound = null;
      }
    }

    if (results.length === 0 /*|| !key*/) {
      this.noTrainingsFound = 'No trainings were found!';
      console.log('aucune formation ne correspond à vos critères de recherche');
    }
  }

  /*
  addTraining = () =>{
    this.router.navigate(['/app/pages/addFormation.html']);
    };
*/

  public onOpenModal(f: Formation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTrainingModal');
    }
    if (mode === 'edit') {
      this.editFormation = f;
      button.setAttribute('data-target', '#updateTrainingModal');
    }
    if (mode === 'delete') {
      this.deleteFormation = f;
      button.setAttribute('data-target', '#deleteTrainingModal');
    }
    container!.appendChild(button);
    button.click();
  }
}
