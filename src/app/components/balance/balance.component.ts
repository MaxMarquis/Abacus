import { Component } from '@angular/core';
import { Depense } from 'src/app/interface/depense';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.sass']
})
export class BalanceComponent {
  balance: number = 0;


  constructor(private canonicApiService: CanonicApiService) { 

    // ! J'ai desactivé le localstorage. J'ai connecté a l'api mais cela ne fonctionne pas @ Maxim
    // this.storageService.balanceValue.subscribe(value => {
    //   this.balance = value;
    // });

    
      
    }
  
  
  
}
