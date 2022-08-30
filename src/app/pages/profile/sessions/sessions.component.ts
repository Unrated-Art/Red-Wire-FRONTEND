import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { SessionService } from 'src/app/services/session.service';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { Session } from 'src/models/session';

@Component({
  selector: 'app-profile-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit, OnDestroy {
  selectedIdSession: number = 0
  subs: Subscription[] = [];
  sessions: Session[] = [];
  modalDelete: any;

  constructor(private stagiareService: StagiaireService) {}

  ngOnInit(): void {
    const sub = this.stagiareService.getUserSessions().subscribe({
      // const sub = this.sessionService.getSessions().subscribe({ // TEST
      next: (response: any) => {
        this.sessions = response;
      },
    });
    this.subs.push(sub);
    this.modalDelete?.addEventListener(
      'hidden.bs.modal',
      () => (this.selectedIdSession = 0)
    );
  }

  public desinscription(idSession: number) {
    const sub = this.stagiareService.desinscriptionSession(idSession).subscribe({
      next: (_value) => {
        console.log('DELETED')
        location.reload()
      },
    });
    this.subs.push(sub)
  }

  public ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.modalDelete?.removeEventListener(
      'hidden.bs.modal',
      () => (this.selectedIdSession = 0)
    );
  }
}
