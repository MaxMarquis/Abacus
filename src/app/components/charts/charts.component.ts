import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { Depense } from 'src/app/interface/depense';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass'],
})

export class ChartsComponent implements OnInit {
  // Récupère les props afin de personnaliser le graphique
  @Input() height = '25';
  @Input() width = '25';

  @Input() dataList: Details[] = []  // celle-ci peut ¸etre utilisée dans le cas ou on mettrai un graphique au sommaire des transactions/non applicable
  @Input() dataRevenu: Revenu[] = [] // graphique du sommaire des revenus
  @Input() datadepense: Depense[] = [] // graphique du sommaire des dépenses


  constructor() { }

  ngOnInit(): void {
    // Récupère le data et envoie les descriptions dans doughnutChartLabels et les montants dans doughnutChartData
    this.dataList.map((x) => {
      this.doughnutChartLabels.push(x.description);
      this.doughnutChartData.datasets[0].data.push(x.montant);
    });

    // * graphique pour les revenus
    this.dataRevenu.map((y) => {
      this.doughnutChartLabels.push(y.description);
      this.doughnutChartData.datasets[0].data.push(y.montant);
    });

      // *graphique pour les dépenses
    this.datadepense.map((z) => {
      this.doughnutChartLabels.push(z.description);
      this.doughnutChartData.datasets[0].data.push(z.montant);
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


