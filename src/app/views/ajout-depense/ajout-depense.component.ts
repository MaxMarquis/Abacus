import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { NgForm } from '@angular/forms';
import { Depense } from 'src/app/interface/depense';
import { Revenu } from 'src/app/interface/revenu';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.sass']
})
export class AjoutDepenseComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = "";
  balance: number = 0;
  expenseList!: Depense[];

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal) { }

  // * fonction pour afficher la liste des dépenses
  ngOnInit() {
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        console.log(response);
        this.expenseList = response.data;
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
    // Pour reload le graphique 
    location.reload();
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }

  deleteExpense(id: number) {
    this.expenseList = this.expenseList.filter((v, i) => i !== id);
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
}