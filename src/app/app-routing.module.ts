import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { AideComponent } from './components/aide/aide.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';


const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'rapports', component: RapportsComponent },
  { path: 'tableauDeBord', component: TableauDeBordComponent },
  { path: 'aide', component: AideComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'calendrier', component: CalendrierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
