import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Catalogue } from 'src/models/catalogue';
import { Formation } from 'src/models/formation';
import { Session } from 'src/models/session';
import { CatalogueService } from 'src/services/catalogue.service';
import { FormationService } from 'src/services/formation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  catalogues!:Catalogue[];
  formations!:Formation[];
  sessions!:Session[];

  constructor(
    private serviceCatalogue: CatalogueService,
    private serviceFormations : FormationService,
    private serviceSession : SessionService
  ) {}

  ngOnInit(): void {
    this.serviceCatalogue.getCatalogues().subscribe({
      next:(responseCat: Catalogue[])=>{
        this.catalogues=responseCat;
      }
    });

    this.serviceFormations.getFormations().subscribe({
      next:(responseForm: Formation[])=>{
        this.formations=responseForm;
      }
    });

    this.serviceSession.getSessions().subscribe({
      next:(responseSess:Session[])=>{
        this.sessions=responseSess;
      }
    });

  }


}
