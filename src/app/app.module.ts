import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ListFormationsComponent } from './pages/formation/list-formations/list-formations.component';
import { DetailFormationComponent } from './pages/formation/detail-formation/detail-formation.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AccountComponent } from './pages/account/account.component';
import { ListSessionsComponent } from './pages/list-sessions/list-sessions.component';
import { ListCataloguesComponent } from './pages/list-catalogues/list-catalogues.component';
import { FormationService } from 'src/services/formation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './pages/search-bar/search-bar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AddFormationComponent } from './pages/formation/add-formation/add-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DashboardComponent,
    CatalogueComponent,
    ListFormationsComponent,
    DetailFormationComponent,
    FooterComponent,
    HeaderComponent,
    AuthenticationComponent,
    AccountComponent,
    ListSessionsComponent,
    ListCataloguesComponent,
    SearchBarComponent,
    AccordionComponent,
    AddFormationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [FormationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
