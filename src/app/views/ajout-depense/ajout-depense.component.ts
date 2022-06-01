import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Depense } from 'src/app/interface/depense';
import { ToastService } from 'src/app/services/toast/toast-service';
import { ExpenseService } from 'src/app/services/expanse.service';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.sass'],
})
export class AjoutDepenseComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = '';
  balance: number = 0;
  expenseList!: Depense[];

  constructor(
    private expenseService: ExpenseService,
    private modalService: NgbModal,
    public toastService: ToastService
  ) {}

  // * fonction pour afficher la liste des dépenses
  ngOnInit() {
    this.expenseService.expensesList$.subscribe(
      (expenses) => (this.expenseList = expenses)
    );
  }

  // * cette partie concerne l'ajout des dépenses.
  @Input() depense: Depense = {
    _id: '',
    description: '',
    montant: 1,
    date: new Date(),
    updatedAt: '',
    createdAt: '',
  };
  @Output() majTableau = new EventEmitter();

  addExpense(): void {
    this.expenseService.addExpense(this.depense);
  }

  onSave(addExpense: NgForm) {
    console.log(addExpense);
    if (addExpense.valid) {
      if (this.depense._id != null && this.depense._id != '') {
        this.expenseService.editExpense(this.depense).subscribe((_) => {
          this.majTableau.emit();
        });
        location.reload();
      } else {
        if (this.depense.montant > 0 && this.depense.description != '') {
          this.expenseList.push(this.depense);
          this.addExpense();
          this.toastService.show('Dépense ajoutée ', {
            classname: 'bg-success text-light',
            delay: 5000,
          });
        } else {
          this.toastService.show('Veuillez remplir les champs', {
            classname: 'bg-danger text-light',
            delay: 5000,
          });
        }
      }
    }
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }

  removeExpense(depense: Depense): void {
    this.expenseService.removeExpense(depense);
    if (confirm('Voulez vous supprimer cette dépense ?')) {
    } else {
      console.log('ne pas supprimer');
    }

    location.reload(); // Pour reload le graphique
  }
}
