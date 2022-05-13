import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent implements OnInit {
  @Input() height = '25';
  @Input() width = '25';

  public expenseList: Details[] = [];
  public doughnutChartLabels: string[] = [];

  constructor(private storageService: StorageServiceService) {
    this.storageService.expenseList.subscribe((res) => {
      this.expenseList = res;
    });
  }

  // this.doughnutChartData.datasets.push(x.montant)

  ngOnInit(): void {
    console.log(this.doughnutChartData.datasets);
    this.expenseList.map((x) => {
      this.doughnutChartLabels.push(x.description);
      this.doughnutChartData.datasets[0].data.push(x.montant);
    });
  }

  // Doughnut
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
