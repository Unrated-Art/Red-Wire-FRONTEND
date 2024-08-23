import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Catalogue } from 'src/models/catalogue';
import { Formation } from 'src/models/Formation';
import { Session } from 'src/models/session';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { FormationService } from 'src/app/services/formation.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  catalogues!: Catalogue[];
  formations!: Formation[];
  sessions!: Session[];

  /*
  get isAdmin(): boolean {
    return true
  }
  get isDashCatalogue(): boolean {
    return !this.route.url.startsWith('/dashboard')
  }
  */

  constructor(
    private route: Router,
    private serviceCatalogue: CatalogueService,
    private serviceFormations: FormationService,
    private serviceSession: SessionService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.serviceCatalogue.getCatalogues().subscribe({
      next: (responseCat: Catalogue[]) => {
        this.catalogues = responseCat;
      },
    });

    this.serviceFormations.getFormations().subscribe({
      next: (responseForm: Formation[]) => {
        this.formations = responseForm;
      },
    });

    this.serviceSession.getSessions().subscribe({
      next: (responseSess: Session[]) => {
        this.sessions = responseSess;
      },
    });
  }
}
