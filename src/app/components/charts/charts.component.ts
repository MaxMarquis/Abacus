import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Details } from 'src/app/interface/details';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass'],
})

export class ChartsComponent implements OnInit {
  // Récupère les données à afficher
  @Input() height = '40'
  @Input() width = '40'
  @Input() dataList: Details[] = [];

  // Crée le tableau en appelant le composant
  ngOnInit(): void {
    this.createChart(this.dataList)
  }

  // Met le tableau à jour lors que les données changent
  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataList']) {
      this.createChart(this.dataList)
    }
  }

  createChart(dataList: any[]): any {
    // Récupère le data et envoie les descriptions dans doughnutChartLabels et les montants dans doughnutChartData
    dataList.map((x) => {
      this.doughnutChartLabels.push(x.description);
      this.doughnutChartData.datasets[0].data.push(x.montant);
    });
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}