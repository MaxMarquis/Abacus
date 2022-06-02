import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Depense } from 'src/app/interface/depense';
import { ExpenseService } from 'src/app/services/expanse.service';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.sass'],
})
export class ExpenseChartComponent implements OnInit {
  // Récupère les données à afficher
  @Input() height = '40';
  @Input() width = '40';

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [{ data: [] }],
    labels: this.doughnutChartLabels,
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions = {
    responsive: true,
  };

  constructor(private expense: ExpenseService) {}

  // Crée le tableau en fonction des données recu
  ngOnInit(): void {
    this.expense.expensesList$.subscribe((expenses) => {
      this.createOrUpdateChart(expenses);
    });
  }

  createOrUpdateChart(expenses: Depense[]) {
    this.doughnutChartData = {
      datasets: [{ data: expenses.map((expense) => expense.montant) }],
      labels: expenses.map((expense) => expense.description),
    };
  }
}
