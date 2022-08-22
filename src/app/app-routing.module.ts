import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AddFormationComponent } from './pages/formation/add-formation/add-formation.component';
import { FormationComponent } from './pages/formation/formation.component';
import { ListFormationsComponent } from './pages/formation/list-formations/list-formations.component';

const routes: Routes = [
  // Si vide --(redirection)-> '/formation'
  { path: '', pathMatch: 'full', redirectTo: 'formation' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'formation',
    component: FormationComponent,
    children: [
      // Si '/formation' --(redirection)-> '/formation/add'
      { path: '', pathMatch: 'full', redirectTo: 'add' },
      {
        path: 'add',
        component: AddFormationComponent
      },
      {
        path: 'list',
        component: ListFormationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
