import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SessionType } from 'src/app/types/session-type';

@Component({
  selector: 'app-session-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  @Input() idTraining?: number;
  @Input() ref?: string;
  editSessionModal: HTMLElement | null = null;
  sessions: SessionType[] = [];
  currentIdSession?: number

  constructor() {}
  ngOnInit(): void {
    // TEST
    this.sessions = [
      {
        id: 1,
        dateStart: new Date(),
        dateEnd: new Date(),
        location: 'Paris 3',
        price: 1199
      },
      {
        id: 2,
        dateStart: new Date(),
        dateEnd: new Date(),
        location: 'Paris 7',
        price: 2299
      },
      {
        id: 3,
        dateStart: new Date(),
        dateEnd: new Date(),
        location: 'Paris 12',
        price: 3399
      }
    ];
    this.editSessionModal = document.getElementById('editSessionModal');
    this.editSessionModal?.addEventListener('shown.bs.modal', this.eventGetCurrentSession);
  }

  eventGetCurrentSession(event: Event) {
    // Call Session Service
  }

  setCurrentSessionId(idSession: number): void {
    this.currentIdSession = idSession;
  }

  ngOnDestroy(): void {
    this.editSessionModal?.removeEventListener('shown.bs.modal', this.eventGetCurrentSession);
  }
}
