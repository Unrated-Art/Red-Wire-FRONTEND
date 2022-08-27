import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AddFormationComponent } from './pages/formation/add-formation/add-formation.component';
import { DetailFormationComponent } from './pages/formation/detail-formation/detail-formation.component';
import { EditFormationComponent } from './pages/formation/edit-formation/edit-formation.component';
import { FormationComponent } from './pages/formation/formation.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ListFormationsComponent } from './pages/formation/list-formations/list-formations.component';
import { ListCataloguesComponent } from './pages/catalogue/list-catalogues/list-catalogues.component';
import { OverviewComponent as DashboardOverviewComponent } from './pages/dashboard/overview/overview.component';

const routes: Routes = [
  // Si vide --(redirection)-> '/formation'
  // Accueil
  { path: '', component: AccueilComponent },
  // Formation
  {
    path: 'formation',
    component: FormationComponent,
    children: [
      {
        path: '',
        component: ListFormationsComponent
      },
      {
        path: 'detail/:id',
        component: DetailFormationComponent
      }
    ]
  },
  // Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardOverviewComponent
      },
      {
        path: 'catalogue',
        component: CatalogueComponent,
        children: [
          { path: '', component: ListCataloguesComponent }
        ],
      },
      {
        path: 'formation',
        component: FormationComponent,
        children: [
          {
            path: '',
            component: ListFormationsComponent
          },
          {
            path: 'add',
            component: AddFormationComponent
          },
          {
            path: 'edit/:id',
            component: EditFormationComponent
          }
        ]
      }
    ]
  }
  // any other URL --(redirect)--> Error Page
  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
