import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


import { StorageServiceService } from './services/storage-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { AideComponent } from './components/aide/aide.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ExpenseComponentComponent } from './expense-component/expense-component.component';
import { IncomeComponentComponent } from './income-component/income-component.component';
import { ChartsComponent } from './components/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatriceComponent,
    NavbarComponent,
    RapportsComponent,
    TableauDeBordComponent,
    AideComponent,
    DeconnexionComponent,
    CalendrierComponent,
    ExpenseComponentComponent,
    IncomeComponentComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ClipboardModule,
    NgChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],

  providers: [StorageServiceService, 
    {provide : MAT_DATE_LOCALE, useValue : "fr-FR"}, /* POUR METTRE LES DATEPICKER EN FRANÇAIS */
    { provide: DateAdapter,
      useClass : MomentDateAdapter,
      deps : [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide : MAT_DATE_FORMATS, useValue : MAT_MOMENT_DATE_FORMATS}
  ],

  
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class AppModule { }


