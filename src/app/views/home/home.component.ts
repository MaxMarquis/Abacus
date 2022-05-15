import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public expenseList: Details[] = []
  public incomeList: Details[] = []

  constructor(private storageService: StorageServiceService) {
    this.storageService.expenseList.subscribe((res) => {
      this.expenseList = res;
    });
    this.storageService.incomeList.subscribe((res) => {
      this.incomeList = res;
    });
  }

  ngOnInit(): void {
  }

}
