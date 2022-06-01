import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { NgForm } from '@angular/forms';
import { Depense } from 'src/app/interface/depense';
import { Revenu } from 'src/app/interface/revenu';
import { ToastService } from 'src/app/services/toast/toast-service';

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
  expenseList: Depense[] = [];

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal, public toastService: ToastService) { }

  // * fonction pour afficher la liste des dépenses
  ngOnInit() {
    this.canonicApiService.getExpenseList().subscribe(
      (response: any) => {
        console.log(response);
        response.data.date = new Date(response.data.date);
        this.expenseList = response.data;
      },
      () => console.log('error')
    );
  }

  // * cette partie concerne l'ajout des dépenses.
  @Input() depense: Depense = { _id: '', description: '', montant: 0, date: new Date, depenseBalance: 0, updatedAt: '', createdAt: '', }
  @Output() majTableau = new EventEmitter();


  formatDepense() {
    const [year, month, date] = (this.depense.date as unknown as string).split("-");
    return {
      ...this.depense,
      date: new Date(Number(year), Number(month) - 1, Number(date)),
    }
  }
  addExpense(): void {
    console.log(this.depense);
    this.canonicApiService.addExpense(this.formatDepense()).subscribe();
  }

  onSave(addExpense: NgForm) {
    console.log(addExpense);
    if (addExpense.valid) {
      if (this.depense._id != null && this.depense._id != '') {
        this.canonicApiService.editExpense(this.formatDepense()).subscribe(_ => { this.majTableau.emit() });
      }
      else {
        if (this.depense.montant > 0 && this.depense.description != '') {
          this.expenseList.push(this.depense);
          this.addExpense();
          this.toastService.show('Dépense ajoutée ', { classname: 'bg-success text-light', delay: 5000 });
        } else {
          this.toastService.show('Veuillez remplir les champs', { classname: 'bg-danger text-light', delay: 5000 });
        }
      }

    }
    this.expenseList.push(this.formatDepense());
    // Pour reload le graphique
    location.reload();
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }

  deleteExpense(id: number) {
    this.expenseList = this.expenseList.filter((v, i) => i !== id);
  }

  removeExpense(depense: Depense): void {
    this.canonicApiService.removeExpense(depense)
      .subscribe(_result => this.expenseList = this.expenseList)
    if (confirm('Voulez vous supprimer cette dépense ?')) {
    } else {
      console.log('ne pas supprimer');

    }

    location.reload(); // Pour reload le graphique
  }
}