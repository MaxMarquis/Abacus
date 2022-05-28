import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-sommaire',
  templateUrl: './sommaire.component.html',
  styleUrls: ['./sommaire.component.sass']
})
export class SommaireComponent implements OnInit {

  incomeExpenseList: Details[] = [];
  SummaryIncome: Details[] = [];
  SummaryDepense: Details[] = [];

  constructor(private canonicApiService: CanonicApiService) {
  }

  //   * affichage des données revenu/dépenses dans le sommaire des transactions

  ngOnInit() {
    // * celle ci est la table détails.
    this.canonicApiService.getIncomeExpenseList().subscribe(
      (response: any) => {
        console.log(response);
        this.incomeExpenseList = response.data;
      }, () => console.log('error')
    );

    // * cette fonction permet d'ajouter les revenus via la table des revenus dans le sommaire des transactions
    this.canonicApiService.getSummaryIncome().subscribe(
      (response: any) => {
        console.log(response);
        this.SummaryIncome = response.data;
      }, () => console.log('error')
    );
    // * cette fonction permet d'ajouter les dépenses via la table des dépenses dans le sommaire des transactions
    this.canonicApiService.getSummaryDepense().subscribe(
      (response: any) => {
        console.log(response);
        this.SummaryDepense = response.data;
      }, () => console.log('error')
    );
  }
}