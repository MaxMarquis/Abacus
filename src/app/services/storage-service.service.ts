import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Details } from '../interface/details';


@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  storageIncomeKey: string = environment.storageIncomeKey;
  storageExpenseKey: string = environment.storageExpenseKey;


  balanceValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  incomeList: BehaviorSubject<Details[]> = new BehaviorSubject<Details[]>([]);
  expenseList: BehaviorSubject<Details[]> = new BehaviorSubject<Details[]>([]);

  constructor() {
    this.getBalance();
    this.incomeList.next(this.getIncomeList());
    this.expenseList.next(this.getExpenseList());
  }

  getIncomeList(): Details[] {
    let incomeList = [];
    let incomeString = localStorage.getItem(this.storageIncomeKey);
    if (incomeString != null) {
      incomeList = JSON.parse(incomeString);
    }
    return incomeList;
  }

  getExpenseList(): Details[] {
    let expenseList = [];
    let expenseString = localStorage.getItem(this.storageExpenseKey);
    if (expenseString != null) {
      expenseList = JSON.parse(expenseString);
    }
    return expenseList;
  }

  getBalance(): number {
    let income = 0;
    let expense = 0;
    let incomeList = this.getIncomeList();
    let expenseList = this.getExpenseList();
    incomeList.forEach((element: Details) => {
      income += element.montant;
    }
    );
    expenseList.forEach((element: Details) => {
      expense += element.montant;
    }
    );
    this.balanceValue.next(income - expense);
    return income - expense;
  }

  addIncome(income: Details): void {
    let incomeList = this.getIncomeList();
    incomeList.push(income);
    localStorage.setItem(this.storageIncomeKey, JSON.stringify(incomeList));
    this.balanceValue.next(this.getBalance());
  }

  addExpense(expense: Details): void {
    let expenseList = this.getExpenseList();
    expenseList.push(expense);
    localStorage.setItem(this.storageExpenseKey, JSON.stringify(expenseList));
    this.balanceValue.next(this.getBalance());
  }



  removeIncome(income: Details): void {
    let incomeList = this.getIncomeList();
    let index = incomeList.indexOf(income);
    if (index > -1) {
      incomeList.splice(index, 1);
    }
    localStorage.setItem(this.storageIncomeKey, JSON.stringify(incomeList));
    this.balanceValue.next(this.getBalance());
  }

  removeExpense(expense: Details): void {
    let expenseList = this.getExpenseList();
    let index = expenseList.indexOf(expense);
    if (index > -1) {
      expenseList.splice(index, 1);
    }
    localStorage.setItem(this.storageExpenseKey, JSON.stringify(expenseList));
    this.balanceValue.next(this.getBalance());
  }

  clearIncome(): void {
    localStorage.removeItem(this.storageIncomeKey);
    this.incomeList.next([]);
    this.balanceValue.next(this.getBalance());
  }

  clearExpense(): void {
    localStorage.removeItem(this.storageExpenseKey);
    this.expenseList.next([]);
    this.balanceValue.next(this.getBalance());
  }
}
