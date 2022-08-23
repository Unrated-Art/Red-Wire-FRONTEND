import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formation } from 'src/models/formation';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss'],
})
export class DetailFormationComponent implements OnInit, OnDestroy {
  openAccordion1 = false;
  openAccordion2 = false;
  openAccordion3 = false;
  openAccordion4 = false;

  private subs: Subscription[] = [];
  ref: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const sub = this.route.params.subscribe((parameter) => {
      this.ref = parameter['ref'];
      const formation: Formation | null = null; // Request localhost:8080/api/training/findRef/{ref}
      console.log(formation);
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
