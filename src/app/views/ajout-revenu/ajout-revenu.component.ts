import { v4 as uuid } from 'uuid';

import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { Revenu } from 'src/app/interface/revenu';

@Component({
  selector: 'app-ajout-revenu',
  templateUrl: './ajout-revenu.component.html',
  styleUrls: ['./ajout-revenu.component.sass']
})

export class AjoutRevenuComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = "";
  balance: number = 0;
  incomeList: Revenu[] = [];

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal) {}

  // * fonction pour afficher la liste des revenus
  ngOnInit() {
    this.canonicApiService.getIncomeList().subscribe(
      (response: any) => {
        console.log(response);
        this.revenu = response.data; 
      },
      () => console.log('error')
    );
  }

  // * cette partie concerne l'ajout de revenu
  @Input() revenu: Revenu = {_id:'', description:'', montant: 0, date: new Date, updatedAt: '', createdAt:'',}
  @Output() majTableau = new EventEmitter() ;

  addIncome(): void {
    console.log(this.revenu);
    this.canonicApiService.addIncome(this.revenu).subscribe();
  }
  
  onSave(addIncome: NgForm) {
    console.log(addIncome);
    if(addIncome.valid) {
      if(this.revenu._id != null && this.revenu._id != '') {
        this.canonicApiService.editIncome(this.revenu).subscribe(_ => { this.majTableau.emit() });
      } 
      else {
        this.addIncome();
        alert('Revenu ajouté')
      }
    }
    this.incomeList.push(this.revenu);
    location.reload(); // Pour reload le graphique

  }




  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
  deleteIncome(id: number) {
    this.incomeList = this.incomeList.filter((v, i) => i !== id);
  }

}