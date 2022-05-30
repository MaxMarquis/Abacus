import { v4 as uuid } from 'uuid';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';


import { environment } from 'src/environments/environment';
import { Details } from '../interface/details';
import { StorageServiceService } from '../services/storage-service.service';
import { CanonicApiService } from '../services/canonic-api.service';
import { Depense } from '../interface/depense';

@Component({
  selector: 'app-expense-component',
  templateUrl: './expense-component.component.html',
  styleUrls: ['./expense-component.component.sass']
})

export class ExpenseComponentComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = "";
  balance: number = 0;

  expenseList: Depense[] = [];

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal) {

  }

 

  // * fonction pour afficher la liste des dépenses
  ngOnInit() {
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        console.log(response);
        this.depense = response.data; 
      },
      () => console.log('error')
    );
  }

  @Input() depense: Depense = {_id:'', description:'', montant: 0, date: new Date, updatedAt: '', createdAt:'',}
  @Output() majTableau = new EventEmitter() ;
    
      // *ajouter des dépenses
    addExpense(): void {
    console.log(this.depense);
    this.canonicApiService.addExpense(this.depense).subscribe();
  }

  onSave(addExpense: NgForm) {
    console.log(addExpense);
    if(addExpense.valid) {
      alert('Dépense ajouter')
      if(this.depense._id != null && this.depense._id != '') {
        this.canonicApiService.editExpense(this.depense).subscribe(_ => { this.majTableau.emit() });
      } 
      else {
        this.addExpense();
      }
    }
    this.feedbackFormDirective.resetForm();
    location.reload(); // Pour reload le graphique

  }

  // * Supprime les depenses
  removeExpense(depense: Depense): void {
    if (confirm('Voulez vous supprimer cette dépense ?')){
      this.canonicApiService.removeExpense(depense)
      .subscribe(_result => this.expenseList = this.expenseList.filter(d => d !== depense));

    } else {
      console.log('ne pas supprimer');
    }
    location.reload(); // Pour reload le graphique
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
  

}