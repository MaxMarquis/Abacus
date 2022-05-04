import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FirstComponent } from './components/first/first.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    CalculatriceComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
