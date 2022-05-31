import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-sommaire-revenus',
  templateUrl: './sommaire-revenus.component.html',
  styleUrls: ['./sommaire-revenus.component.sass'],
})
export class SommaireRevenusComponent implements OnInit {
  incomeList: Revenu[] = [];
  dateOne?: Date;
  dateTwo?: Date;

  constructor(
    private canonicApiService: CanonicApiService,
    private incomeService: IncomeService
  ) {}

  ngOnInit() {
    this.incomeService.getIncomeList().subscribe((incomes) => {
      this.incomeList = incomes;
    });
  }
  public isCollapsed = true;

  // Delete Income
  removeIncome(revenu: Revenu): void {
    this.canonicApiService
      .removeIncome(revenu)
      .subscribe((_result) => (this.incomeList = this.incomeList));
    if (confirm('Voulez vous supprimer ce revenu ?')) {
    } else {
      console.log('ne pas supprimer');
    }

    location.reload(); // Pour reload le graphique
  }

  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = dateO.value.trim() == '' ? undefined : new Date(dateO.value);
    this.dateTwo = dateT.value.trim() == '' ? undefined : new Date(dateT.value);
  }
}
