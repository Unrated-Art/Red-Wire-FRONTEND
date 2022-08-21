import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/services/catalogue.service';
import { NgForm } from '@angular/forms';
import { Catalogue } from 'src/models/catalogue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-catalogues',
  templateUrl: './list-catalogues.component.html',
  styleUrls: ['./list-catalogues.component.scss'],
})
export class ListCataloguesComponent implements OnInit {
  public catalogues!: Catalogue[];
  public editCatalogue!: Catalogue;
  public deleteCatalogue!: Catalogue;

  errorMessage?: HttpErrorResponse;

  constructor(
    private catalogueService: CatalogueService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCatalogues();
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

  public onAddCatalogue(addForm: NgForm): void {
    document.getElementById('add-catalogue-form')!.click();
    this.catalogueService.addCatalogue(addForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.getCatalogues();
        addForm.reset();
      },
      error: (httpErrorResponse) => {
        this.errorMessage = httpErrorResponse.message;
        alert(this.errorMessage);
        addForm.reset();
      },
    });
  }
  public onOpenModal(catalogue: Catalogue, mode: string): void {
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
}
