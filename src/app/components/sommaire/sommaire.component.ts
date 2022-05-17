import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-sommaire',
  templateUrl: './sommaire.component.html',
  styleUrls: ['./sommaire.component.sass']
})
export class SommaireComponent implements OnInit {
  incomeExpenseList: Details[] = [];

  constructor(private storageService: StorageServiceService) {
    this.storageService.incomeExpenseList.subscribe(value => {
      this.incomeExpenseList = value;
    });
  }

  ngOnInit(): void {
  }

}
