import { Component } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    balance: number = 0;

  constructor(private storageService: StorageServiceService) { 

    this.storageService.balanceValue.subscribe(value => {
      this.balance = value;
    });
  
  }

  }



