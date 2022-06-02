import { Component, OnInit } from '@angular/core';
import { Revenu } from 'src/app/interface/revenu';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.sass'],
})
export class IncomeTableComponent implements OnInit {
  constructor(private incomeService: IncomeService) {}

  incomeList: Revenu[] = [];

  ngOnInit(): void {
    this.incomeService.incomesList$.subscribe((incomes) => {
      this.incomeList = incomes;
    });
  }

  removeIncome(revenu: Revenu): void {
    this.incomeService.removeIncome(revenu);
  }
}
