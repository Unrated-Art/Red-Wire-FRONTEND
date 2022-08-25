import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { Session } from 'src/models/session';

@Component({
  selector: 'app-session-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  public form = new FormGroup({
    idSession: new FormControl(null),
    dateDebut: new FormControl(null, Validators.required),
    dateFin: new FormControl(null, Validators.required),
    lieu: new FormControl(null, Validators.required),
    prix: new FormControl(null, Validators.required),
  });

  public subs: Subscription[] = []
  public session?: any;
  private _id: number = 0

  @Output() sendData = new EventEmitter<any>();

  @Input() set idSession(id: number) {
    if (id > 0) {
      const getSub = this.sessionService.getSession(id).subscribe((session: Session) => {
        this.session = session
        this.form.get('idSession')?.disable();
        this.form.get('dateDebut')?.setValue(this.session?.dateDebut)
        this.form.get('dateFin')?.setValue(this.session?.dateFin);
        this.form.get('lieu')?.setValue(this.session?.lieu);
        this.form.get('prix')?.setValue(this.session?.prix);
      })
      this.subs.push(getSub)
    } else {
      this.session = undefined
      this.form.reset()
    }
    this._id = id;
  }

  get idSession(): number {
    return this._id
  }

  constructor(private sessionService: SessionService) {}

  get dateDebut(): any {
    return this.form?.get('dateDebut');
  }
  get dateFin(): any {
    return this.form?.get('dateFin');
  }
  get lieu(): any {
    return this.form?.get('lieu');
  }
  get prix(): any {
    return this.form?.get('prix');
  }

  ngOnInit(): void {}

  submit() {
    /*
    if (this.form.invalid) {
      return
    }
    */
    let data: any = {
      dateDebut: this.dateDebut.value,
      dateFin: this.dateFin.value,
      lieu: this.lieu.value,
      prix: this.prix.value,
    }
    if (this.idSession) {
      data.idSession = this.form.get('idSession')?.value
    }
    this.sendData.emit(data)
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe())
  }
}
