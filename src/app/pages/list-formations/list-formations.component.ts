import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/services/formation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/models/formation';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.scss'],
})
export class ListFormationsComponent implements OnInit {
  public formations!: Formation[];
  public editFormation!: Formation;
  public deleteFormation!: Formation;

  errorMessage?: HttpErrorResponse;

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getFormations();
  }

  public getFormations(): void {
    this.formationService.getFormations().subscribe({
      next: (Response) => {
        this.formations = Response;
        console.log(this.formations);
      },
      error: (HttpErrorResponse) => {
        this.errorMessage = HttpErrorResponse.message;
        alert(this.errorMessage);
      },
      complete: () => console.log('DONE!'),
    });
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

  public onUpdateFormation(formation: Formation): void {
    this.formationService.updateFormation(formation).subscribe({
      next: (response) => {
        console.log(response);
        this.getFormations();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
    });
  }

  public onDeleteEmloyee(formationId: number): void {
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

  /* public searchFormations(key: string): void {
    console.log(key);
    const keyword = document.getElementById('searchBar')?.innerText;
    console.log(key);
    if (keyword) {
      key = keyword;
    }

    const results: Formation[] = [];
    for (const f of this.formations) {
      if (
        f.reference.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.titref.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.lieu.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.prerequis.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.publicVise.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.publicVise.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        f.programmeDetaille.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        (f.themes.length !== 0 &&
          f.themes.forEach((t) => {
            t.nomTheme.toLowerCase().indexOf(key.toLowerCase()) !== -1;
          })) //#!TODO: vérifier dernière condition (avec thème)??
      ) {
        results.push(f);
        console.log("on a trouvé une formation correspondant à vos critères de recherche! ")
      }
    }
    this.formations = results;
    if (results.length === 0 || !key) {
      this.getFormations();
      console.log("aucune formation ne correspond à vos critères de recherche")
    }
  }
  */
  public searchFormations(): void {
    const key = document.getElementById('searchBar1')?.nodeValue;
    alert(key);
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
