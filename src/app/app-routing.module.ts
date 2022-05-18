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


const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'tableauDeBord', component: TableauDeBordComponent },
  { path: 'sommaire', component: SommaireComponent },
  { path: 'depenses-ajout', component: AjoutDepenseComponent },
  { path: 'depenses', component: SommaireDepensesComponent },
  { path: 'revenus-ajout', component: AjoutRevenuComponent },
  { path: 'revenus', component: SommaireRevenusComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
