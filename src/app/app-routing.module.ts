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
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { OverviewComponent as DashboardOverviewComponent } from './pages/dashboard/overview/overview.component';

const routes: Routes = [
  // Si vide --(redirection)-> '/formation'
  // { path: '', component: AccueilComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // {
  //   path: 'formation',
  //   component: FormationComponent,
  //   children: [
  //     { path: '', component: ListFormationsComponent },
  //     {
  //       path: 'add',
  //       component: AddFormationComponent
  //     },
  //     {
  //       path: 'edit/:id',
  //       component: EditFormationComponent
  //     },
  //     {
  //       path: 'detail/:id',
  //       component: DetailFormationComponent
  //     },
  //   ]
  // },

  // Si vide --(redirection)-> '/formation'
//   { path: 'auth',
//     component: AuthComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent }
//   ],
//   },


//   { path: '', component: AccueilComponent },

//   {
//     path: 'formation',
//     component: FormationComponent,
//     children: [
//       { path: '', component: ListFormationsComponent },
//       {
//         path: 'detail/:id',
//         component: DetailFormationComponent,
//       },
//     ],
//   },



//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     children: [
//       {
//          path: '',
//          component: DashboardComponent},
//       {
//          path: 'catalogue',
//          component: CatalogueComponent,
//          children: [
//            {path: '', component: ListCataloguesComponent}
//           ]
//       },
//       { path: 'formation', component: FormationComponent,
//       children: [
//         { path: 'add',
//           component: AddFormationComponent,
//           },
//         { path: 'edit/:id',
//          component: EditFormationComponent,
//        },
//          ],
//     },
// ]},

{ path: 'auth', component: AuthComponent},
{ path: 'auth/login', component: LoginComponent },
{ path: 'auth/register', component: RegisterComponent },
{ path: '', component: AccueilComponent },
{ path: 'formation', component: ListFormationsComponent},
{ path: 'formation/detail/:id', component: DetailFormationComponent},
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
      component: ListCataloguesComponent,
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
},
// { path: 'dashboard/catalogue', component: ListCataloguesComponent},
// { path: 'dashboard/formation', component: ListFormationsComponent},
// { path: 'dashboard/formation/add', component: AddFormationComponent},
// { path: 'dashboard/formation/edit/:id', component: EditFormationComponent},


  { path: '**', pathMatch: 'full', redirectTo: 'formation' },
  // any other URL --(redirect)--> Error Page
  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
