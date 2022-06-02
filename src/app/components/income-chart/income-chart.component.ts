import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Revenu } from 'src/app/interface/revenu';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.sass'],
})
export class IncomeChartComponent implements OnInit {
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

  constructor(private income: IncomeService) {}

  // Crée le tableau en fonction des données recu
  ngOnInit(): void {
    this.income.incomesList$.subscribe((incomes) => {
      this.createOrUpdateChart(incomes);
    });
  }

  createOrUpdateChart(incomes: Revenu[]) {
    this.doughnutChartData = {
      datasets: [{ data: incomes.map((income) => income.montant) }],
      labels: incomes.map((income) => income.description),
    };
  }
}
