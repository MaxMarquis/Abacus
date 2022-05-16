import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { AideComponent } from './components/aide/aide.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { LoginComponent } from './components/login/login.component';
import { ExpenseComponentComponent } from './expense-component/expense-component.component';
import { IncomeComponentComponent } from './income-component/income-component.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'rapports', component: RapportsComponent },
  { path: 'tableauDeBord', component: TableauDeBordComponent },
  { path: 'aide', component: AideComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'login', component: LoginComponent },
  { path: 'depenses', component: ExpenseComponentComponent },
  { path: 'revenus', component: IncomeComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
