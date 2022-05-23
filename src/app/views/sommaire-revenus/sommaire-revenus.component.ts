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
    this.storageService.incomeList.subscribe(value => {
      
      this.incomeList = value;
    });
    this.storageService.balanceValue.subscribe(value => {
      this.balance = value;
    });
  }

    // Delete Income
    removeIncome(d: Details): void {
      if (confirm('Voulez vous supprimer votre revenu ?')) {
        this.storageService.removeIncome(d);
      } else {
       console.log('ne pas supprimer');
      }

      location.reload(); // Pour reload le graphique
      
    }
    deleteIncome(id: number) {

      this.incomeList = this.incomeList.filter((v, i) => i !== id);
      
    }
    ngOnInit(): void {
    }
}