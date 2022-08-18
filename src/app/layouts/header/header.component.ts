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
  navs: Array<NavType> = [
    { path: 'home', name: 'Home' },
    { path: 'contact', name: 'About Us' },
    { path: 'catalogue', name: 'Catalogues' },
    {
      path: 'training',
      name: 'Trainings',
      child: [
        { path: 'training/java', name: 'Java' },
        { path: 'training/cpp', name: 'C++' }
      ]
    }
  ];
  constructor() {}
  ngOnInit(): void {
    // #!TODO
  }
}
