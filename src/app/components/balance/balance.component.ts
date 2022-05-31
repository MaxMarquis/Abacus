import { Component, OnInit } from '@angular/core';
import { Depense } from 'src/app/interface/depense';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.sass'],
})
export class BalanceComponent implements OnInit {
  balance: number = 0;
  balanceIncome: number = 0;
  balanceExpense: number = 0;

  constructor(private canonicApiService: CanonicApiService) {
    // ! J'ai desactivé le localstorage. J'ai connecté a l'api mais cela ne fonctionne pas @ Maxim
    // this.storageService.balanceValue.subscribe(value => {
    //   this.balance = value;
    // });
  }

  ngOnInit(): void {
    this.getBalanceIncome();
    this.getBalanceExpense();
    this.getBalance();
  }

  getBalanceIncome() {
    this.canonicApiService.getIncomeList().subscribe(
      (incomeList: any) => {
        incomeList.data.map((income: any) => {
          this.balanceIncome += income.montant;
        });
        return this.balanceIncome;
      },
      () => console.log('error')
    );
  }
  getBalanceExpense() {
    this.canonicApiService.getExpenseList().subscribe(
      (expenseList: any) => {
        expenseList.data.map((expense: any) => {
          this.balanceExpense += expense.montant;
        });
        return this.balanceExpense;
      },
      () => console.log('error')
    );
  }
  getBalance() {
    this.balance = this.balanceIncome - this.balanceExpense;
  }
}
