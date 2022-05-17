import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgChartsModule } from 'ng2-charts';

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
import { SommaireComponent } from './components/sommaire/sommaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SommaireDepensesComponent } from './views/sommaire-depenses/sommaire-depenses.component';
import { SommaireRevenusComponent } from './views/sommaire-revenus/sommaire-revenus.component';
import { AjoutDepenseComponent } from './views/ajout-depense/ajout-depense.component';
import { AjoutRevenuComponent } from './views/ajout-revenu/ajout-revenu.component';
import { LogoutComponent } from './views/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableauDeBordComponent,
    CalculatriceComponent,
    NavbarComponent,
    RapportsComponent,
    TableauDeBordComponent,
    AideComponent,
    DeconnexionComponent,
    CalendrierComponent,
    LoginComponent,
    ExpenseComponentComponent,
    IncomeComponentComponent,
    ChartsComponent,
    SommaireComponent,
    SommaireDepensesComponent,
    SommaireRevenusComponent,
    AjoutDepenseComponent,
    AjoutRevenuComponent,
    LogoutComponent,
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
  ],
  providers: [StorageServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
