import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { StorageServiceService } from './services/storage-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ExpenseComponentComponent } from './expense-component/expense-component.component';
import { IncomeComponentComponent } from './income-component/income-component.component';
import { ChartsComponent } from './components/charts/charts.component';

import { AuthentificationComponent } from './views/authentification/authentification.component';
import { DeconnexionComponent } from './views/deconnexion/deconnexion.component';
import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { SommaireComponent } from './views/sommaire/sommaire.component';
import { SommaireDepensesComponent } from './views/sommaire-depenses/sommaire-depenses.component';
import { SommaireRevenusComponent } from './views/sommaire-revenus/sommaire-revenus.component';
import { AjoutDepenseComponent } from './views/ajout-depense/ajout-depense.component';
import { AjoutRevenuComponent } from './views/ajout-revenu/ajout-revenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent,
    NavbarComponent,
    CalendrierComponent,
    ExpenseComponentComponent,
    IncomeComponentComponent,
    ChartsComponent,
    AuthentificationComponent,
    DeconnexionComponent,
    TableauDeBordComponent,
    SommaireComponent,
    SommaireDepensesComponent,
    SommaireRevenusComponent,
    AjoutDepenseComponent,
    AjoutRevenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ClipboardModule,
    NgChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],

  providers: [StorageServiceService,
    { provide: MAT_DATE_LOCALE, useValue: "fr-FR" }, /* POUR METTRE LES DATEPICKER EN FRANÇAIS */
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }