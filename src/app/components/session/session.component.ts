import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { Session } from 'src/models/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit, OnDestroy {
  @Input() idTraining: number = 0;

  modalFormAdEdit: any;
  modalFormRemove: any;
  public statusModal: string = '';
  public subs: Subscription[] = [];
  public sessions: Session[] = [];
  public currentIdSession: number = 0;
  public currentSession?: Session | undefined = undefined;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.modalFormAdEdit = document.getElementById('addEditSessionModal');
    this.modalFormRemove = document.getElementById('removeSessionModal');
    this.modalFormAdEdit.addEventListener('hide.bs.modal', () => {
      this.currentIdSession = 0;
      this.currentSession = undefined;
    });
    this.modalFormRemove.addEventListener('hide.bs.modal', () => {
      this.currentIdSession = 0;
      this.currentSession = undefined;
    });
    this.loadSessions();
  }

  public loadSessions(): void {
    const subGetSessions: Subscription = this.sessionService
      .getSessions(this.idTraining)
      .subscribe({
        next: (response: any) => {
          this.sessions = [];
          Object.assign(this.sessions, response);
          console.log(this.sessions);
        },
        error: (err: any) => {
          console.error('ERROR: ', err);
        },
      });
    this.subs.push(subGetSessions);
  }

  addEditSession(data: any) {
    if (this.currentIdSession) {
      this.editSession(data);
    } else {
      this.addSession(data);
    }
  }

  addSession(data: any) {
    delete data.idSession;
    console.log('AJOUTER => ', data);
    const subAddSession = this.sessionService
      .addSession(data, this.idTraining)
      .subscribe({
        next: (response: Session) => {
          this.loadSessions();
        },
        error: (err: any) => {},
      });
    this.subs.push(subAddSession);
  }

  editSession(data: any) {
    console.log('EDITER => ', data);
    const subEditSession = this.sessionService.editSession(data).subscribe({
      next: (response: Session) => {
        this.loadSessions();
      },
      error: (err: any) => {},
    });
    this.subs.push(subEditSession);
  }

  removeSession() {
    console.log(this.currentIdSession);
    const subRemoveSession = this.sessionService
      .removeSession(this.currentIdSession)
      .subscribe({
        next: (response) => {
          this.loadSessions();
        },
        error: (err: any) => {},
      });
    this.subs.push(subRemoveSession);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.modalFormAdEdit.removeEventListener('hide.bs.modal', () => {
      this.currentIdSession = 0;
      this.currentSession = undefined;
    });
    this.modalFormRemove.removeEventListener('hide.bs.modal', () => {
      this.currentIdSession = 0;
      this.currentSession = undefined;
    });
  }
}
