import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-sommaire-depenses',
  templateUrl: './sommaire-depenses.component.html',
  styleUrls: ['./sommaire-depenses.component.sass']
})
export class SommaireDepensesComponent implements OnInit  {


  expenseList: Details[] = [];


  constructor(private canonicApiService: CanonicApiService) {}


  ngOnInit() {
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        console.log(response);
        this.expenseList = response.data; 
      },
      () => console.log('error')
    );
  }

    removeExpense(revenu: Revenu): void {
      if (confirm('Voulez vous supprimer cette dépense ?')){
        this.canonicApiService.removeExpense(revenu._id)
        .subscribe(_result => this.expenseList = this.expenseList.filter(d => d !== revenu));
      } else {
        console.log('ne pas supprimer');

      }
      
      location.reload(); // Pour reload le graphique
      }
    
      
    
    deleteExpense(_id: number) {

      this.expenseList = this.expenseList.filter((v, i) => i !== _id);
      
    }
    
}


