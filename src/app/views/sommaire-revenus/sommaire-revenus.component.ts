import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-sommaire-revenus',
  templateUrl: './sommaire-revenus.component.html',
  styleUrls: ['./sommaire-revenus.component.sass']
})
export class SommaireRevenusComponent implements OnInit {

  incomeList: Details[] = [];
  balance: number = 0;

  constructor(private storageService: StorageServiceService) {
    this.storageService.incomeExpenseList.subscribe(value => {
      this.incomeList = value;
    });
  }
  ngOnInit(): void {
  }
}