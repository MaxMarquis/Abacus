import { Component } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.sass']
})
export class BalanceComponent {
  balance: number = 0;

  constructor(private storageService: StorageServiceService) { 

    this.storageService.balanceValue.subscribe(value => {
      this.balance = value;
    });
  
  }
}
