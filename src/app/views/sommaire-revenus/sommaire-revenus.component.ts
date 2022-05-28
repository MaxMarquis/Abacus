import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-sommaire-revenus',
  templateUrl: './sommaire-revenus.component.html',
  styleUrls: ['./sommaire-revenus.component.sass']
})
export class SommaireRevenusComponent implements OnInit {

  incomeList: Details[] = [];


  constructor(private canonicApiService: CanonicApiService) {}

  ngOnInit() {
    this.canonicApiService.getIncomeList().subscribe(
      (response: any) => {
        console.log(response);
        this.incomeList = response.data; 
      },
      () => console.log('error')
    );
  }

    // Delete Income
    removeIncome(revenu: Revenu ): void {
      if (confirm('Voulez vous supprimer ce revenu ?')){
        this.canonicApiService.removeIncome(revenu._id)
        .subscribe(_result => this.incomeList = this.incomeList.filter(d => d !== revenu));
      } else {
        console.log('ne pas supprimer');
      }
      location.reload(); // Pour reload le graphique
      }

      
      deleteIncome(_id: number) {

      this.incomeList = this.incomeList.filter((v, i) => i !== _id);
    }
    
}