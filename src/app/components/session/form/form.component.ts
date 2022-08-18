import { Component, Input, OnInit } from '@angular/core';
import { SessionType } from 'src/app/types/session-type';

@Component({
  selector: 'app-session-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() session?: SessionType;
  editedSession?: SessionType;

  constructor() {}
  ngOnInit(): void {
    this.editedSession = this.session;
  }
  getCurrentSessionData(id: number) {
    console.log('OK => ', id);
  }
}
