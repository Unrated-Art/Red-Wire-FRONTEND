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
    private  route: ActivatedRoute
    ) {
      this.route.params.subscribe((params) => {
        console.log(params); //log the entire params object
        console.log(params['id']); //log the value of id
        this.identifiant = Number(params['id']);
      });
      console.log('Got the [id] from "formation/{id}" url: ' + this.identifiant);
    }

  ngOnInit(): void {
    this.serviceFormation
    .getFormationById(this.identifiant)
    .subscribe({
      next:(f:Formation)=>{
        this.formation=f;
      },
      error:(err:string)=>{
        alert(err);
      },
      complete:()=>{
        console.log("GetFormationById OK :)")
      }

    });

  }
}
