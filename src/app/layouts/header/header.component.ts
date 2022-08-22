import { Component, OnInit } from '@angular/core';

interface NavType {
  path: string;
  name: string;
  child?: Array<NavType>;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navs: Array<NavType> = [
    {
      path: 'formation',
      name: 'Formation',
      child: [
        { path: 'formation/list', name: 'Liste Formation' },
        { path: 'formation/add', name: 'Ajouter Formation' }
      ]
    }
  ];
}
