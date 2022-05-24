import { v4 as uuid } from 'uuid';

import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { Details } from '../interface/details';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-income-component',
  templateUrl: './income-component.component.html',
  styleUrls: ['./income-component.component.sass']
})

export class IncomeComponentComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  details!: Details;
  isValidMontantError: string = "";
  storageIncomeKey: string = environment.storageIncomeKey;
  storageExpenseKey: string = environment.storageExpenseKey;
  balance: number = 0;
  incomeList: Details[] = [];

  constructor(private fb: FormBuilder, private storageService: StorageServiceService, private modalService: NgbModal) {
    this.createForm();
    this.storageService.incomeList.subscribe(value => {
      this.incomeList = value;
    });
    this.storageService.balanceValue.subscribe(value => {
      this.balance = value;
    });
  }

  // Delete Income
  removeIncome(d: Details): void {
    if (confirm('Voulez vous supprimer votre revenu ?')) {
      this.storageService.removeIncome(d);
    } else {
     console.log('ne pas supprimer');
    }
    
  }

  createForm(): void {
    this.submitForm = this.fb.group({
      description: ['', Validators.required],
      montant: [0, [Validators.required, Validators.pattern("^[0-9-.]+[0-9-.]*$")]],
      date: [Date.now, Validators.required]
    });
  }

  onSubmit(): void {
    this.details = this.submitForm.value;
    this.details.id = uuid();
    this.storageService.addIncome(this.details);

    this.submitForm.reset({
      description: '',
      montant: 0,
      date: new Date()
    });

    this.feedbackFormDirective.resetForm();

    // location.reload(); // Pour reload le graphique
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
  deleteIncome(id: number) {

    this.incomeList = this.incomeList.filter((v, i) => i !== id);

    alert("suppression");
    
  }

}