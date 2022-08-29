import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { Session } from 'src/models/session';

@Component({
  selector: 'app-profile-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  sessions: Session[] = [];

  constructor(private stagiareService: StagiaireService) {}

  ngOnInit(): void {
    const sub = this.stagiareService.getUserSessions().subscribe({
      next: (response: any) => {
        this.sessions = response;
      },
    });
    this.subs.push(sub);
  }

  public desinscription(idSession: number) {
    this.stagiareService.desinscriptionSession(idSession);
  }

  public ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
