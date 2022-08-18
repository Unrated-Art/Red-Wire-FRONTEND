import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ContentComponent } from './layouts/content/content.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { SessionComponent } from './components/session/session.component';
import { FormComponent as SessionFormComponent } from './components/session/form/form.component';
import { OverviewComponent as SessionOverviewComponent } from './components/session/overview/overview.component';

import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { OverviewComponent as CatalogueOverviewComponent } from './pages/catalogue/overview/overview.component';
import { EditComponent as CatalogueEditComponent } from './pages/catalogue/edit/edit.component';

import { TrainingComponent } from './pages/training/training.component';
import { EditComponent as TrainingEditComponent } from './pages/training/edit/edit.component';
import { OverviewComponent as TrainingOverviewComponent } from './pages/training/overview/overview.component';

import { WorkDaysPipe } from './filters/work-days.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    //
    SessionComponent,
    SessionOverviewComponent,
    SessionFormComponent,
    //
    CatalogueComponent,
    CatalogueOverviewComponent,
    CatalogueEditComponent,

    TrainingComponent,
    TrainingOverviewComponent,
    TrainingEditComponent,
    WorkDaysPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
