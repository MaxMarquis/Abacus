import { Component, OnInit } from '@angular/core';
import { Depense } from 'src/app/interface/depense';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { BalanceService } from 'src/app/services/balance.service';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.sass'],
})
export class BalanceComponent implements OnInit {
  balance: number = 0;

  constructor(private balanceService: BalanceService) {
    this.balanceService.onBalanceChange();
  }

  ngOnInit(): void {
    this.balanceService.currentBalance.subscribe((balance) => {
      this.balance = balance;
    });
  }
}
