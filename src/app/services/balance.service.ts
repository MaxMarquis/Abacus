import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpenseService } from './expanse.service';
import { IncomeService } from './income.service';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}
  private incomes = 0;
  private expenses = 0;
  private balance = new BehaviorSubject<number>(0);
  public currentBalance = this.balance.asObservable();

  onBalanceChange() {
    this.expenseService.getExpenseList().subscribe((expenses) => {
      this.expenses = expenses.reduce((acc, curr) => acc + curr.montant, 0);
      this.balance.next(this.incomes - this.expenses);
    });
    this.incomeService.getIncomeList().subscribe((incomes) => {
      this.incomes = incomes.reduce((acc, curr) => acc + curr.montant, 0);
      this.balance.next(this.incomes - this.expenses);
    });
  }
}
