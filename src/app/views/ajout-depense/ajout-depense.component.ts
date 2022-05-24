import { Component, OnInit, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Details } from 'src/app/interface/details';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.sass']
})
export class AjoutDepenseComponent {
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
      date: new Date(),
      if : alert("Dépense ajoutée")

    });

    this.expenseList.push(this.details);
    this.feedbackFormDirective.resetForm();
    location.reload(); // Pour reload le graphique
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
}