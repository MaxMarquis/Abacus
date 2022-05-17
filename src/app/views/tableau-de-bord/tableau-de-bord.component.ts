import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.sass']
})
export class TableauDeBordComponent implements OnInit {
  balance: number = 0;
  expenseList: Details[] = []
  incomeList: Details[] = []

  constructor(private storageService: StorageServiceService) {
    this.storageService.expenseList.subscribe(value => {
      this.expenseList = value;
    });
    this.storageService.incomeList.subscribe(value => {
      this.incomeList = value;
    });
    this.storageService.balanceValue.subscribe(value => {
      this.balance = value;
    });
  }

  ngOnInit(): void {
  }

}
