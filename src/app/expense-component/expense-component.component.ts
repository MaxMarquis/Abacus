import { v4 as uuid } from 'uuid';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { Details } from '../interface/details';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-expense-component',
  templateUrl: './expense-component.component.html',
  styleUrls: ['./expense-component.component.sass']
})

export class ExpenseComponentComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  details!: Details;
  isValidMontantError: string = "";
  storageIncomeKey: string = environment.storageIncomeKey;
  storageExpenseKey: string = environment.storageExpenseKey;
  balance: number = 0;
  expenseList: Details[] = [];

  constructor(private fb: FormBuilder, private storageService: StorageServiceService, private modalService: NgbModal) {
    this.createForm();
    this.storageService.expenseList.subscribe(value => {
      this.expenseList = value;
    });
    this.storageService.balanceValue.subscribe(value => {
      this.balance = value;
    });
  }

  // Delete Expense
  removeExpense(d: Details): void {
    this.storageService.removeExpense(d);
  }

  createForm(): void {
    this.submitForm = this.fb.group({
      description: ['', Validators.required],
      montant: [0, [Validators.required, Validators.pattern("^[0-9-.]+[0-9]*$")]],
      date: [Date.now, Validators.required]
    });
  }

  onSubmit(): void {
    this.details = this.submitForm.value;
    this.details.id = uuid();
    this.storageService.addExpense(this.details);

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
}