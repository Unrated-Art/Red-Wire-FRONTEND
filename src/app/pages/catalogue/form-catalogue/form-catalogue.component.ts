import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Catalogue } from 'src/models/catalogue';

@Component({
  selector: 'app-form-catalogue',
  templateUrl: './form-catalogue.component.html',
  styleUrls: ['./form-catalogue.component.scss']
})
export class FormCatalogueComponent implements OnInit {
  @Input() status: String = '';
  @Input() idCatalogue: number = 0

  @Output() sendAddData = new EventEmitter<any>();
  @Output() sendEditData = new EventEmitter<any>();

  form = new FormGroup({
    titre: new FormControl(null),
    auteur: new FormControl(null),
    dateCreation: new FormControl(null)
  })

  get titre(): any {
    return this.form?.get('titre')
  }
  get auteur(): any {
    return this.form?.get('auteur')
  }
  get dateCreation(): any {
    return this.form?.get('dateCreation')
  }

  submit(): void {
    const data: Catalogue = {
      idCatalogue: this.idCatalogue,
      titre: this.titre.value,
      auteur: this.auteur.value,
      dateCreation: this.dateCreation.value,
    }
    if (this.idCatalogue === 0 && this.status == 'add') {
      this.sendAddData.emit(data)
    } else {
      this.sendEditData.emit(data)
    }

  }

  constructor() { }

  ngOnInit(): void {}

}
