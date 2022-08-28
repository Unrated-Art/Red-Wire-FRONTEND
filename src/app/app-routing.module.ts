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
import { ProfileComponent } from './pages/profile/profile.component';
import { IsAuthGuard } from './guard/is-auth.guard';
import { EditComponent as ProfileEditComponent } from './pages/profile/edit/edit.component';
import { OverviewComponent as ProfileOverviewComponent } from './pages/profile/overview/overview.component';
import { HasRoleGuard } from './guard/has-role.guard';

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
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [IsAuthGuard, HasRoleGuard],
    data: {
      role: 'STAGIAIRE'
    },
    children: [
      {
        path: '',
        component: ProfileOverviewComponent
      },
      {
        path: 'edit',
        component: ProfileEditComponent
      }
    ]
  },
  // Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsAuthGuard, HasRoleGuard],
    data: {
      role: 'ADMIN'
    },
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
