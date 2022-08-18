import { Component, OnInit } from '@angular/core';
import { CatalogueType } from 'src/app/types/catalogue-type';

@Component({
  selector: 'app-catalogue-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  catalogues: CatalogueType[] = [];
  constructor() {}
  ngOnInit(): void {
    this.catalogues = [
      {
        id: 1,
        title: 'Les Femmes dans la Programmation Applicatifs & Web 2022',
        author: 'M. Patate',
        creationDate: new Date()
      },
      {
        id: 1,
        title: 'Formations financées par Facebook France (avancée)',
        author: 'Ms. Potato',
        creationDate: new Date()
      }
    ];
  }
}
