import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/services/formation.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss'],
})
export class DetailFormationComponent implements OnInit {
  openAccordion1 = false;
  openAccordion2 = false;
  openAccordion3 = false;
  openAccordion4 = false;

  formation!: Formation;
  identifiant!: number;

  constructor(
    private serviceFormation: FormationService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      this.identifiant = Number(params['id']);
    });
    console.log('Got the [id] from "formation/{id}" url: ' + this.identifiant);
  }

  // https://mailtolink.me
  get mailTo(): string {
    return 'mailto:contact@saturne.formation.com?subject=Demande%20de%20Devis%20Personnalis%C3%A9%20%23999';
  }

  ngOnInit(): void {
    this.serviceFormation.getFormationById(this.identifiant).subscribe({
      next: (f: Formation) => {
        this.formation = f;
        console.warn(this.formation.sessions);
      },
      error: (err: string) => {
        alert(err);
      },
      complete: () => {
        console.log('GetFormationById OK :)');
      },
    });
  }
}
