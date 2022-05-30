import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { Depense } from 'src/app/interface/depense';
import { Revenu } from 'src/app/interface/revenu';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.sass']
})
export class TableauDeBordComponent implements OnInit {
  balance: number = 0;
  expenseList: Depense[] = [];
  incomeList: Revenu[] = [];
  incomeExpenseList: Details[] = [];



  constructor(private canonicApiService: CanonicApiService, private authService: AuthService, private router: Router) {
    
    // * pour l'affichage des données dans les graphiques
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        console.log(response);
        this.expenseList = response.data; 
      },
      () => console.log('error')
    );

    this.canonicApiService.getIncomeList().subscribe(
      (response: any) => {
        console.log(response);
        this.incomeList = response.data; 
      },
      () => console.log('error')
    );

  }

    // ! voir pour  ajouter la function de la balance-@ Maxim
  
  ngOnInit(): void {
  }

}
function totalLeft() {
  throw new Error('Function not implemented.');
}

