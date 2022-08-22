import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormationService } from 'src/app/services/formation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogueService } from 'src/app/services/catalogue.service';

import { AppComponent } from './app.component';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ListFormationsComponent } from './pages/formation/list-formations/list-formations.component';
import { DetailFormationComponent } from './pages/formation/detail-formation/detail-formation.component';
import { AccountComponent } from './pages/account/account.component';
import { ListSessionsComponent } from './pages/list-sessions/list-sessions.component';
import { ListCataloguesComponent } from './pages/list-catalogues/list-catalogues.component';
import { SearchBarComponent } from './pages/search-bar/search-bar.component';
import { AddFormationComponent } from './pages/formation/add-formation/add-formation.component';
import { FormationComponent } from './pages/formation/formation.component';
import { ErrorComponent } from './pages/error/error.component';
import { EditFormationComponent } from './pages/formation/edit-formation/edit-formation.component';

@NgModule({
  declarations: [
    // layouts
    HeaderComponent,
    FooterComponent,
    // components
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    // pages
    AppComponent,
    AccueilComponent,
    DashboardComponent,
    ListFormationsComponent,
    DetailFormationComponent,
    AccountComponent,
    ListSessionsComponent,
    ListCataloguesComponent,
    SearchBarComponent,
    AddFormationComponent,
    CatalogueComponent,
    FormationComponent,
    ErrorComponent,
    EditFormationComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [FormationService, CatalogueService],
  bootstrap: [AppComponent],
})
export class AppModule {}
