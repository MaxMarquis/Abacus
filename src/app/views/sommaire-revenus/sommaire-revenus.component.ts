import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';

@Component({
  selector: 'app-sommaire-revenus',
  templateUrl: './sommaire-revenus.component.html',
  styleUrls: ['./sommaire-revenus.component.sass']
})
export class SommaireRevenusComponent implements OnInit {

  incomeList!: Details[];
  dateOne?: Date;
  dateTwo?: Date;

  constructor(private canonicApiService: CanonicApiService) { }

  ngOnInit() {
    this.canonicApiService.getIncomeList().subscribe(
      (response: any) => {
        this.incomeList = response.data;
      }, () => console.log('error')
    );
  }
  public isCollapsed = true;

  // Delete Income
  removeIncome(revenu: Revenu): void {
    if (confirm('Voulez vous supprimer ce revenu ?')) {
      this.canonicApiService.removeIncome(revenu._id)
        .subscribe(_result => this.incomeList = this.incomeList.filter(d => d !== revenu));
    } else {
      console.log('ne pas supprimer');
    }
    // Pour reload le graphique ** Normalement on n'a plus besoin du reload pour recharger le graphique mm
    // location.reload(); 
  }

  deleteIncome(_id: number) {
    this.incomeList = this.incomeList.filter((v, i) => i !== _id);
  }

  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
    this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));
  }
}