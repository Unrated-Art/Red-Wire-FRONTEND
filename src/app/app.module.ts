import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ListFormationsComponent } from './pages/list-formations/list-formations.component';
import { DetailFormationComponent } from './pages/detail-formation/detail-formation.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TrainingSearchBarComponent } from './training-search-bar/training-search-bar.component';
import { AccountComponent } from './pages/account/account.component';
import { ListSessionsComponent } from './pages/list-sessions/list-sessions.component';
import { ListCataloguesComponent } from './pages/list-catalogues/list-catalogues.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    AccueilComponent,
    DashboardComponent,
    CatalogueComponent,
    ListFormationsComponent,
    DetailFormationComponent,
    FooterComponent,
    HeaderComponent,
    AuthenticationComponent,
    TrainingSearchBarComponent,
    AccountComponent,
    ListSessionsComponent,
    ListCataloguesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
