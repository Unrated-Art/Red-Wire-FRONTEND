import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/app/services/formation.service';
import { SessionService } from 'src/app/services/session.service';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorObserver, Subscription } from 'rxjs';
import { StagiaireService } from 'src/app/services/stagiaire.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss'],
})
export class DetailFormationComponent implements OnInit {
  subs: Subscription[] = [];
  openAccordion1 = false;
  openAccordion2 = false;
  openAccordion3 = false;
  openAccordion4 = false;

  openTabInter = true;
  openTabIntra = true;

  formation!: Formation;
  identifiant!: number;
  firstSessionPrice: number = 0;

  selectedSessionId: number = 0;

  formationData: Array<any> = [];

  public setSessionPrice(price: number): void {
    console.log(price, ' <= inflation is REAL');
    this.firstSessionPrice = price;
  }

  public setSelectedSessionId(id: number): void {
    console.log(id);
    this.selectedSessionId = id;
  }

  constructor(
    private serviceFormation: FormationService,
    private stagiaireService: StagiaireService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
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

        this.formationData = [
          {
            title: 'Objectif de cette formation',
            content: 'TEST 1 2 3',
          },
        ];
      },
      error: (err: string) => {
        alert(err);
      },
      complete: () => {
        console.log('GetFormationById OK :)');
      },
    });
  }

  onRegisterClick(): void {
    const sub = this.auth.isLoggedIn$.subscribe({
      next: (isConnected: boolean) => {
        if (!isConnected) {
          alert("Connectez-vous s'il vous plait. Avant de proceder.")
        } else {
          const sub = this.stagiaireService
            .inscriptionSession(this.selectedSessionId)
            .subscribe({
              next: (_value) => {
                this.router.navigate(['/profile']);
              },
            });
          this.subs.push(sub);
        }
      },
      error: (err) => {},
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
