import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss'],
})
export class DetailFormationComponent implements OnInit {
  openAccordion1 = false;
  openAccordion2 = false;
  openAccordion3 = false;
  openAccordion4 = false;

  constructor() {}

  ngOnInit(): void {}
}
