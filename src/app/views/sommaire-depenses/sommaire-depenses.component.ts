import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';

@Component({
  selector: 'app-sommaire-depenses',
  templateUrl: './sommaire-depenses.component.html',
  styleUrls: ['./sommaire-depenses.component.sass']
})
export class SommaireDepensesComponent implements OnInit {

  expenseList!: Details[];
  dateOne?: Date;
  dateTwo?: Date;

  constructor(private canonicApiService: CanonicApiService) { }

  ngOnInit() {
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        this.expenseList = response.data;
      },
      () => console.log('error')
    );
  }

  removeExpense(revenu: Revenu): void {
    if (confirm('Voulez vous supprimer cette dépense ?')) {
      this.canonicApiService.removeExpense(revenu._id)
        .subscribe(_result => this.expenseList = this.expenseList.filter(d => d !== revenu));
    } else {
      console.log('ne pas supprimer');
    }
    // Pour reload le graphique ** Normalement on n'a plus besoin du reload pour recharger le graphique mm
    // location.reload(); 
  }

  deleteExpense(_id: number) {
    this.expenseList = this.expenseList.filter((v, i) => i !== _id);
  }

  // collapse fermé pour input dates
  public isCollapsed = true;

  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
    this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));
  }
}