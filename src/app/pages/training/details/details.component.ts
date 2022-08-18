import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  slug: string = '';

  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    const sub = this._route.params.subscribe((parameter) => {
      this.slug = parameter['slug'];
    });
    this.subs.push(sub);
  }
  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
