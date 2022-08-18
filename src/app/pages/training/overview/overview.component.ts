import { Component, OnInit } from '@angular/core';
import { TrainingType } from 'src/app/types/training-type';

@Component({
  selector: 'app-training-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  trainings: TrainingType[] = [];
  constructor() {}
  ngOnInit(): void {
    this.trainings = [
      {
        id: 1,
        ref: 'XXX-0AB', // <=== Use Reference for URL
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
      },
      {
        id: 2,
        ref: 'XXX-0CD',
        title: 'C++ (novice)',
        location: 'Bibliothèque François Mitterrand',
        inter: true,
        duration: 1280,
        requirements:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione minus! Nobis totam tenetur deleniti nisi, consequatur laborum nam dolorum facilis exercitationem a cupiditate, earum aliquam illum debitis sed. Ipsam.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione minus! Nobis totam tenetur deleniti nisi, consequatur laborum nam dolorum facilis exercitationem a cupiditate, earum aliquam illum debitis sed. Ipsam.',
        target: 'Men & Women (age 18-35)',
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione minus! Nobis totam tenetur deleniti nisi, consequatur laborum nam dolorum facilis exercitationem a cupiditate, earum aliquam illum debitis sed. Ipsam.'
      }
    ];
  }
}
