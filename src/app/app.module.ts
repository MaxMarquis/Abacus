import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FirstComponent } from './components/first/first.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { AideComponent } from './components/aide/aide.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    CalculatriceComponent,
    NavbarComponent,
    RapportsComponent,
    TableauDeBordComponent,
    AideComponent,
    DeconnexionComponent,
    CalendrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
