import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Details } from 'src/app/interface/details';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass'],
})

export class ChartsComponent implements OnInit {
  // Récupère les props afin de personnaliser le graphique
  @Input() height = '25';
  @Input() width = '25';
  @Input() dataList: Details[] = []

  constructor() { }

  ngOnInit(): void {
    // Récupère le data et envoie les descriptions dans doughnutChartLabels et les montants dans doughnutChartData
    this.dataList.map((x) => {
      this.doughnutChartLabels.push(x.description);
      this.doughnutChartData.datasets[0].data.push(x.montant);
    });
  }

  // Création du graphique style Doughnut
  public doughnutChartLabels: String[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public doughnutChartType: ChartType = 'doughnut';


}


