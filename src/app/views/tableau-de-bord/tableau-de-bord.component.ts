import { Component, OnInit } from '@angular/core';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { Depense } from 'src/app/interface/depense';
import { Revenu } from 'src/app/interface/revenu';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ExpenseService } from 'src/app/services/expanse.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.sass'],
})
export class TableauDeBordComponent implements OnInit {
  balance: number = 0;
  expenseList: Depense[] = [];
  incomeList!: Revenu[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private expenseService: ExpenseService
  ) {
    this.expenseService.expensesList$.subscribe(
      (expenses) => (this.expenseList = expenses)
    );
  }

  // ! voir pour  ajouter la function de la balance-@ Maxim

  ngOnInit(): void {}
}
