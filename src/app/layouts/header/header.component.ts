import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface NavType {
  path: string;
  name: string;
  child?: Array<NavType>;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get isAdmin(): boolean {
    return true
  }
  get isNotDashboard(): boolean {
    return !this.route.url.startsWith('/dashboard')
  }
  constructor(private route: Router) {}

  ngOnInit(): void {}

  navs: Array<NavType> = [
    {
      path: 'formation',
      name: 'Formation',
      child: [
        { path: 'formation/list', name: 'Liste Formation' },
      ],
    },
  ];
}
