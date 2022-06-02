import { Component, Input, OnInit } from '@angular/core';
import { Depense } from 'src/app/interface/depense';
import { ExpenseService } from 'src/app/services/expanse.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.sass'],
})
export class ExpenseTableComponent implements OnInit {
  constructor(private expenseService: ExpenseService) {}

  @Input() dateOne: Date = new Date(1979, 0, 1);
  @Input() dateTwo: Date = new Date();

  expenses: Depense[] = [];

  ngOnInit(): void {
    this.expenseService.expensesList$.subscribe((expenses) => {
      this.expenses = expenses;
    });
  }

  removeExpense(expense: Depense) {
    this.expenseService.removeExpense(expense);
  }
}
