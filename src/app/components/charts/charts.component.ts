import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType, Legend } from 'chart.js';
import { Depense } from 'src/app/interface/depense';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass'],
})

export class ChartsComponent implements OnInit {
  // Récupère les données à afficher
  @Input() height = '40'
  @Input() width = '40'
  @Input() incomeList!: Revenu[];
  @Input() expenseList!: Depense[];

  legend = {
    legend : "right"
  }
  

  // Crée le tableau en fonction des données recu
  ngOnInit(): void {
    if (this.incomeList) {
      this.createChart(this.incomeList)
    } else {
      this.createChart(this.expenseList)
    }
  }

  // Met le tableau à jour lors que les données changent
  ngOnChanges(changes: SimpleChanges) {
    // if (changes['incomeList']) {
    //   this.createChart(this.incomeList)
    // }
    // if (changes['expense']) {
    //   this.createChart(this.expenseList)
    // }
  }

  createChart(data: any[]): any {
    // Récupère le data et envoie les descriptions dans doughnutChartLabels et les montants dans doughnutChartData
    data.map((x) => {
      this.doughnutChartLabels.push(x.description);
      this.doughnutChartData.datasets[0].data.push(x.montant);
    });
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{       
      data: [         
      ] 
    }]
    
  };



  

 

  public doughnutChartType: ChartType = 'doughnut';
}