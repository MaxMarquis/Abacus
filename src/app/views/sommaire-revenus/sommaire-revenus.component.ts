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
  dateOne?: Date;
  dateTwo?: Date;


  constructor(private storageService: StorageServiceService) {
    this.storageService.incomeList.subscribe(value => {

      this.incomeList = value;
    });

  }
  public isCollapsed = true;

  doFilter(dateO: HTMLInputElement, dateT: HTMLInputElement): void {
    this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
    this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));
  }

  // Delete Income
  removeIncome(d: Details): void {
    if (confirm('Êtes-vous sur de vouloir supprimer cette donnée ?')) {
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