import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
//import { NgForm } from '@angular/forms';
import { Catalogue } from 'src/models/catalogue';
import { Router } from '@angular/router';
//import { bootstrapApplication } from '@angular/platform-browser';
//import { Modal as ModalBS } from 'bootstrap'

@Component({
  selector: 'app-list-catalogues',
  templateUrl: './list-catalogues.component.html',
  styleUrls: ['./list-catalogues.component.scss'],
})
export class ListCataloguesComponent implements OnInit, OnDestroy {
  public catalogues!: Catalogue[];
  public editCatalogue!: Catalogue;
  public deleteCatalogue!: Catalogue;
  public tmpIdCatalogue: number = 0;
  public test: number = 0;
  modalDelete: any;
  modalForm: any;

  errorMessage?: HttpErrorResponse;

  constructor(
    private catalogueService: CatalogueService,
    private router: Router
  ) {}

  setTmpIdCatalogue(tmpIdCatalogue: number) {
    console.log(tmpIdCatalogue);
    this.tmpIdCatalogue = tmpIdCatalogue;
  }

  ngOnInit() {
    this.getCatalogues();

    // Init Bootstrap Modal Event
    this.tmpIdCatalogue = 0;
    this.modalDelete = document.getElementById('deleteCatalogueModal');
    this.modalForm = document.getElementById('formCatalogueModal');
    this.modalForm?.addEventListener(
      'hide.bs.modal',
      () => (this.tmpIdCatalogue = 0)
    );
  }

  ngOnDestroy(): void {
    this.modalForm?.removeEventListener(
      'hide.bs.modal',
      () => (this.tmpIdCatalogue = 0)
    );
  }

  public getCatalogues(): void {
    this.catalogueService.getCatalogues().subscribe({
      next: (response: Catalogue[]) => {
        this.catalogues = response;
        console.log(this.catalogues);
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
      complete: () => console.log('DONE!'),
    });
  }

  // public onEditCatalogue(dataForm: Catalogue): void {
  //   this.catalogueService.updateCatalogue(dataForm).subscribe({
  //     next: (response) => {
  //       this.getCatalogues();
  //       // dataForm.reset();
  //     },
  //     error: (httpErrorResponse) => {
  //       this.errorMessage = httpErrorResponse.message;
  //       alert(this.errorMessage);
  //     },
  //   });
  // }

  public onEditCatalogue(dataForm: Catalogue): void {
    this.catalogueService.updateCatalogue(dataForm).subscribe({
      next: (response) => {
        this.getCatalogues();
        // dataForm.reset();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
    });
  }

  public onAddCatalogue(dataForm: Catalogue): void {
    this.catalogueService.addCatalogue(dataForm).subscribe({
      next: (response) => {
        this.getCatalogues();
        // dataForm.reset();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
    });
  }

  // public onDeleteCatalogue(idCatalogue: number): void {
  //   // const testModal = ModalBS.getInstance(this.modalDelete)
  //   // testModal?.hide()
  //   // #! TODO: A corriger
  //   //testModal?.dispose()
  //   // console.log(this.modalDelete.hide())
  //   this.catalogueService.deleteCatalogue(idCatalogue).subscribe({
  //     next: (response: any) => {
  //       // this.modalDelete.hide();
  //       this.getCatalogues();
  //     },
  //     error: (httpErrorResponse) => {
  //       this.errorMessage = httpErrorResponse.message;
  //       alert(this.errorMessage);
  //     }
  //   });
  // }

  public onDeleteCatalogue(idCatalogue: number): void {
    // const testModal = ModalBS.getInstance(this.modalDelete)
    // testModal?.hide()
    // #! TODO: A corriger
    //testModal?.dispose()
    // console.log(this.modalDelete.hide())
    this.catalogueService.deleteCatalogue(idCatalogue).subscribe({
      next: (response: any) => {
        // this.modalDelete.hide();
        this.getCatalogues();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
      },
    });
  }

  public searchCatalogues(key: string): void {
    console.log(key);
    const results: Catalogue[] = [];
    for (const catalogue of this.catalogues) {
      if (
        catalogue.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        catalogue.auteur.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        !!catalogue.dateCreation
      ) {
        results.push(catalogue);
      }
    }
    this.catalogues = results;
    if (results.length === 0 || !key) {
      this.getCatalogues();
    }
  }

  /*
  public onOpenModal(catalogue: Catalogue | any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCatalogueModal');
    }
    if (mode === 'edit') {
      this.editCatalogue = catalogue;
      button.setAttribute('data-target', '#updateCatalogueModal');
    }
    if (mode === 'delete') {
      this.deleteCatalogue = catalogue;
      button.setAttribute('data-target', '#deleteCatalogueModal');
    }
    container!.appendChild(button);
    button.click();
  }
  */
}
