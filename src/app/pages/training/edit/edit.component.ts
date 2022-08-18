import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrainingType } from 'src/app/types/training-type';

@Component({
  selector: 'app-training-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  slug: string = '';
  training?: TrainingType;

  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    const sub = this._route.params.subscribe((parameter) => {
      this.slug = parameter['slug'];
      // GET TRAINER FROM 'ref' Identifier
      this.training = {
        id: 79, // <=== GET ID from GET Request URL
        ref: 'XXX-0AB',
        title: 'Java (advanced)',
        location: 'Paris 12',
        inter: false,
        duration: 1600,
        requirements:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione minus! Nobis totam tenetur deleniti nisi, consequatur laborum nam dolorum facilis exercitationem a cupiditate, earum aliquam illum debitis sed. Ipsam.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione minus! Nobis totam tenetur deleniti nisi, consequatur laborum nam dolorum facilis exercitationem a cupiditate, earum aliquam illum debitis sed. Ipsam.',
        target: 'Women Only (age 18-35)',
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione minus! Nobis totam tenetur deleniti nisi, consequatur laborum nam dolorum facilis exercitationem a cupiditate, earum aliquam illum debitis sed. Ipsam.'
      };
    });
    this.subs.push(sub);
  }
  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
