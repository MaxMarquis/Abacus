import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interface/details';
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

  constructor(private storageService: StorageServiceService) {
    this.storageService.expenseList.subscribe(value => {

      this.expenseList = value;
    });

  }

  // collapse fermé pour input dates
  
  public isCollapsed = true;


  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
    this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));


  }

  // Delete Expense
  removeExpense(d: Details): void {
    if (confirm('Êtes-vous sur de vouloir supprimer cette donnée ?')) {
      this.storageService.removeExpense(d);
    } else {
      console.log('ne pas supprimer');
    }

    location.reload(); // Pour reload le graphique

  }

  
  deleteExpense(id: number) {

    this.expenseList = this.expenseList.filter((v, i) => i !== id);

  }
  
 
  ngOnInit(): void {
  }

}
