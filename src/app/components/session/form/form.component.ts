import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    dateDebut: new FormControl(null, Validators.required),
    dateFin: new FormControl(null, Validators.required),
    lieu: new FormControl(null, Validators.required),
    prix: new FormControl(null, Validators.required),
  });

  @Input() idSession: number = 0;
  @Output() sendData = new EventEmitter<any>();

  constructor() {}

  get dateDebut(): any {
    return this.form.get('dateDebut');
  }
  get dateFin(): any {
    return this.form.get('dateFin');
  }
  get lieu(): any {
    return this.form.get('lieu');
  }
  get prix(): any {
    return this.form.get('prix');
  }

  ngOnInit(): void {}
  submit() {
    /*
    if (this.form.invalid) {
      return
    }
    */
    const data = {
      dateDebut: this.dateDebut.value,
      dateFin: this.dateFin.value,
      lieu: this.lieu.value,
      prix: this.prix.value,
    };
    this.sendData.emit(data);
  }
}
