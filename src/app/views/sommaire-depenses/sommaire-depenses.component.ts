import { Component, OnInit } from '@angular/core';
import { Depense, DepenseDTO } from 'src/app/interface/depense';
import { Details, DetailsDTO } from 'src/app/interface/details';
import { Revenu } from 'src/app/interface/revenu';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-sommaire-depenses',
  templateUrl: './sommaire-depenses.component.html',
  styleUrls: ['./sommaire-depenses.component.sass']
})
export class SommaireDepensesComponent implements OnInit {

  expenseList: Details[] = [];
  dateOne?: Date;
  dateTwo?: Date;


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




    removeExpense(depense : Depense): void {
        this.canonicApiService.removeExpense(depense)
        .subscribe(_result => this.expenseList = this.expenseList)
        if (confirm('Voulez vous supprimer cette dépense ?')){
      } else {
        console.log('ne pas supprimer');

      }
      
      location.reload(); // Pour reload le graphique
      }
    
    
    // collapse fermé pour input dates
  
  public isCollapsed = true;


  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
    this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));


  }
}



  

  


