import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  get isAdmin(): boolean {
    return true;
  }
  get isNotDashboard(): boolean {
    return !this.route.url.startsWith('/dashboard');
  }

  constructor(private route: Router) {}

  ngOnInit(): void {}
}
