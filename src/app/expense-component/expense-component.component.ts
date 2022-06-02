import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Depense } from '../interface/depense';
import { ExpenseService } from '../services/expanse.service';

@Component({
  selector: 'app-expense-component',
  templateUrl: './expense-component.component.html',
  styleUrls: ['./expense-component.component.sass'],
})
export class ExpenseComponentComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = '';
  balance: number = 0;

  expenseList: Depense[] = [];

  constructor(
    private expenseService: ExpenseService,
    private modalService: NgbModal
  ) {}

  // * fonction pour afficher la liste des dépenses
  ngOnInit() {
    this.expenseService.expensesList$.subscribe(
      (expenses) => (this.expenseList = expenses)
    );
  }

  @Input() depense: Depense = {
    _id: '',
    description: '',
    montant: 0,
    date: new Date(),
    updatedAt: '',
    createdAt: '',
  };
  @Output() majTableau = new EventEmitter();

  // *ajouter des dépenses
  addExpense(): void {
    console.log(this.depense);
    this.expenseService.addExpense(this.depense);
  }

  onSave(addExpense: NgForm) {
    console.log(addExpense);
    if (addExpense.valid) {
      alert('Dépense ajouter');
      if (this.depense._id != null && this.depense._id != '') {
        this.expenseService.editExpense(this.depense).subscribe((_) => {
          this.majTableau.emit();
        });
      } else {
        this.addExpense();
      }
    }
    this.feedbackFormDirective.resetForm();
    location.reload(); // Pour reload le graphique
  }

  // * Supprime les depenses
  removeExpense(depense: Depense): void {
    if (confirm('Voulez vous supprimer cette dépense ?')) {
      this.expenseService.removeExpense(depense);
    } else {
      console.log('ne pas supprimer');
    }
    location.reload(); // Pour reload le graphique
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
}
