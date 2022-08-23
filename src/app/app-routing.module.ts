import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';

import { AddFormationComponent } from './pages/formation/add-formation/add-formation.component';
import { DetailFormationComponent } from './pages/formation/detail-formation/detail-formation.component';
import { EditFormationComponent } from './pages/formation/edit-formation/edit-formation.component';
import { FormationComponent } from './pages/formation/formation.component';
import { ListFormationsComponent } from './pages/formation/list-formations/list-formations.component';

const routes: Routes = [
  // Si vide --(redirection)-> '/formation'
  { path: '', component: AccueilComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'formation',
    component: FormationComponent,
    children: [
      { path: '', component: ListFormationsComponent },
      {
        path: 'add',
        component: AddFormationComponent
      },
      {
        path: 'edit/:id',
        component: EditFormationComponent
      },
      {
        path: 'detail/:id',
        component: DetailFormationComponent
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'formation' },
  // any other URL --(redirect)--> Error Page
  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
