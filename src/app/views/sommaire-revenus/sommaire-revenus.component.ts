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
  dateOne?: Date;
  dateTwo?: Date;


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
  public isCollapsed = true;



    // Delete Income
    removeIncome(revenu : Revenu): void {
      this.canonicApiService.removeIncome(revenu)
      .subscribe(_result => this.incomeList = this.incomeList)
      if (confirm('Voulez vous supprimer ce revenu ?')){
    } else {
      console.log('ne pas supprimer');

    }
    
    location.reload(); // Pour reload le graphique
    }

      
      
    
  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
    this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));
  }

  
  
}