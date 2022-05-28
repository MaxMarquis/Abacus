import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { environment } from 'src/environments/environment';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { NgForm } from '@angular/forms';
import { Depense } from 'src/app/interface/depense';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.sass']
})
export class AjoutDepenseComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = "";
  balance: number = 0;
  expenseList: Depense[] = [];

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal) { }

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

  // * cette partie concerne l'ajout des dépenses.

  @Input() depense: Depense = { _id: '', description: '', montant: 0, date: new Date, updatedAt: '', createdAt: '', }
  @Output() majTableau = new EventEmitter();


  addExpense(): void {
    console.log(this.depense);
    this.canonicApiService.addExpense(this.depense).subscribe();
  }



  onSave(addExpense: NgForm) {
    console.log(addExpense);
    if (addExpense.valid) {
      if (this.depense._id != null && this.depense._id != '') {
        this.canonicApiService.editExpense(this.depense).subscribe(_ => { this.majTableau.emit() });
      }
      else {
        this.addExpense();
        alert('Dépense ajoutée')
      }

    }
    this.expenseList.push(this.depense);
    // Pour reload le graphique ** Normalement on n'a plus besoin du reload pour recharger le graphique mm
    // location.reload(); 

  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }

  deleteExpense(id: number) {
    this.expenseList = this.expenseList.filter((v, i) => i !== id);
  }
}