import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';


const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
