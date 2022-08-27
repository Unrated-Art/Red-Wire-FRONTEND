import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { NgForm } from '@angular/forms';
import { Formation } from 'src/models/formation';
import { Theme } from 'src/models/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation-list',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.scss'],
})
export class ListFormationsComponent implements OnInit {
  public formations!: Formation[];
  public editFormation!: Formation;
  public deleteFormation!: Formation;
  allThemes?: Theme[] = [];
  allThemesString?: String[];

  openAccordion = ([] = [false]);

  errorMessage?: HttpErrorResponse;
  noTrainingsFound?: string | null;

  isHidden = true;
  router!: Router;

  constructor(private formationService: FormationService, router: Router) {
    this.router=router;
  }

  ngOnInit() {
    this.getFormations();
    if (!!this.allThemes) {
      this.allThemes?.forEach((t) => {
        console.log('Hello from ngOnInit() :D');
        console.log('theme' + t.idTheme + ': ' + t.nomTheme);
      });
    } else {
      console.warn('la liste des thèmes est vide!!!');
    }
    //this.getThemes();
  }

  public getThemes(): void {
    this.formations.forEach((f) => {
      console.log('f.objectif: ' + f.objectif);
      f.themes?.forEach((t) => {
        this.allThemes?.push(t);
        console.warn('allThemes: ' + this.allThemes);
        console.log(t.nomTheme);
      });
    });
  }

  public onClick(i: number,_id?: number){
    //alert("Button "+i +" clicked");
    this.router.navigate([`formation/detail/${_id}`]);
  }

  public showMessage(idBtn: string): void {
    alert(idBtn);
  }

  public getFormations(): void {
    this.formationService.getFormations().subscribe({
      next: (response: Formation[]) => {
        this.formations = response;
        console.log(this.formations);
        //#region alimenter la liste 'allThemes' (tous les thèmes de toutes les formations)
        this.formations!.forEach((f) => {
          console.log('f.objectif: ' + f.objectif);
          f.themes?.forEach((t) => {
            this.allThemes?.push(t);
            console.log(t.nomTheme);
          });
        });
        //#endregion
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
      complete: () => {
        console.log('DONE!');
        this.allThemes?.forEach((th) => {
          console.error('theme' + th.idTheme + ': ' + th.nomTheme);
        });
      },
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
