import { Component, OnInit } from '@angular/core';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { Details } from 'src/app/interface/details';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.sass']
})
export class TableauDeBordComponent implements OnInit {
  balance: number = 0;
  expenseList!: Details[];
  incomeList!: Details[];

  constructor(private canonicApiService: CanonicApiService) { }

  ngOnInit(): void {
    this.canonicApiService.getIncomeList().subscribe(
      (response: any) => {
        this.incomeList = response.data;
      }, () => console.log('error')
    );
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        this.expenseList = response.data;
      },
      () => console.log('error')
    );
  }

}
function totalLeft() {
  throw new Error('Function not implemented.');
}

