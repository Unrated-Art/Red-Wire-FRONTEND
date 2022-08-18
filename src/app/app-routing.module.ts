import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { OverviewComponent as CatalogueOverviewComponent } from './pages/catalogue/overview/overview.component';
import { EditComponent as CatalogueEditComponent } from './pages/catalogue/edit/edit.component';
import { AddComponent as CatalogueAddComponent } from './pages/catalogue/add/add.component';

import { TrainingComponent } from './pages/training/training.component';
import { OverviewComponent as TrainingOverviewComponent } from './pages/training/overview/overview.component';
import { DetailsComponent as TrainingDetailsComponent } from './pages/training/details/details.component';
import { EditComponent as TrainingEditComponent } from './pages/training/edit/edit.component';

import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    children: [
      { path: '', pathMatch: 'full', component: CatalogueOverviewComponent },
      { path: 'add', component: CatalogueAddComponent },
      { path: ':slug/edit', component: CatalogueEditComponent }
    ]
  },
  {
    path: 'training',
    component: TrainingComponent,
    children: [
      { path: '', pathMatch: 'full', component: TrainingOverviewComponent },
      { path: ':slug', component: TrainingDetailsComponent },
      { path: ':slug/edit', component: TrainingEditComponent }
    ]
  },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
