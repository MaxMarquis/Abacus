import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';

// Pages
import { AuthentificationComponent } from './views/authentification/authentification.component';
import { DeconnexionComponent } from './views/deconnexion/deconnexion.component';
import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { SommaireComponent } from './views/sommaire/sommaire.component';
import { SommaireDepensesComponent } from './views/sommaire-depenses/sommaire-depenses.component';
import { SommaireRevenusComponent } from './views/sommaire-revenus/sommaire-revenus.component';
import { AjoutDepenseComponent } from './views/ajout-depense/ajout-depense.component';
import { AjoutRevenuComponent } from './views/ajout-revenu/ajout-revenu.component';
import { LoginComponent } from './login/login.component';
import { RegisteComponent } from './registe/registe.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  // ! test
  { path: '', component: LoginComponent },
  { path: 'registe', component: RegisteComponent },
  { path: 'login', component: LoginComponent },

  // { path: '', component: AuthentificationComponent },
  {
    path: 'tableauDeBord',
    component: TableauDeBordComponent,
    canActivate: [AuthGuard],
  },
  { path: 'sommaire', component: SommaireComponent, canActivate: [AuthGuard] },
  {
    path: 'depenses-ajout',
    component: AjoutDepenseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'depenses',
    component: SommaireDepensesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'revenus-ajout',
    component: AjoutRevenuComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'revenus',
    component: SommaireRevenusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'calendrier',
    component: CalendrierComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'calculatrice',
    component: CalculatriceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'deconnexion',
    component: DeconnexionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
