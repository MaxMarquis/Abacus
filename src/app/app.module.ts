import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatRippleModule,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { StorageServiceService } from './services/storage-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ExpenseComponentComponent } from './expense-component/expense-component.component';
import { IncomeComponentComponent } from './income-component/income-component.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { JwtModule } from '@auth0/angular-jwt';

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
import { CalendrierSommaireComponent } from './components/calendrier-sommaire/calendrier-sommaire.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SortByDatesPipe } from './filters/sort-by-dates.pipe';
import { MatchMediaQueryComponent } from './components/match-media-query/match-media-query.component';
import { LoginComponent } from './login/login.component';
import { RegisteComponent } from './registe/registe.component';
import { AuthOnVisibilityComponent } from './components/auth-on-visibility/auth-on-visibility.component';
import { ToastService } from './services/toast/toast-service';
import { ToastsContainer } from './services/toast/toasts-container.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatriceComponent,
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
    CalendrierSommaireComponent,
    BalanceComponent,
    SortByDatesPipe,
    MatchMediaQueryComponent,
    LoginComponent,
    RegisteComponent,
    AuthOnVisibilityComponent,
    ToastsContainer,
  ],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('token');
        },
      },
    }),
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
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],

  providers: [
    ToastService,
    StorageServiceService,
    { provide: MAT_DATE_LOCALE, useValue: "fr-FR" }, /* POUR METTRE LES DATEPICKER EN FRANÇAIS */
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
