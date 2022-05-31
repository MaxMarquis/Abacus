import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Revenu } from 'src/app/interface/revenu';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-ajout-revenu',
  templateUrl: './ajout-revenu.component.html',
  styleUrls: ['./ajout-revenu.component.sass'],
})
export class AjoutRevenuComponent {
  constructor(
    private modalService: NgbModal,
    private incomeService: IncomeService
  ) {}

  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = '';
  balance: number = 0;
  incomeList: Revenu[] = [];

  // * fonction pour afficher la liste des revenus
  ngOnInit() {
    this.incomeService
      .getIncomeList()
      .subscribe((incomes) => (this.incomeList = incomes));
  }

  // * cette partie concerne l'ajout de revenu
  @Input() revenu: Revenu = {
    _id: '',
    description: '',
    montant: 0,
    date: new Date(),
    updatedAt: '',
    createdAt: '',
  };
  @Output() majTableau = new EventEmitter();

  addIncome(): void {
    this.incomeService.addIncome(this.revenu);
  }

  onSave(addIncome: NgForm) {
    if (addIncome.valid) {
      if (this.revenu._id != null && this.revenu._id != '') {
        this.incomeService
          .editIncome(this.revenu)
          .subscribe(() => this.majTableau.emit());
      } else {
        this.addIncome();
        alert('Revenu ajouté');
      }
    }
    this.incomeList.push(this.revenu);
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
  deleteIncome(id: number) {
    this.incomeList = this.incomeList.filter((v, i) => i !== id);
  }

  // Delete Income
  removeIncome(revenu: Revenu): void {
    this.incomeService.removeIncome(revenu);
    if (confirm('Voulez vous supprimer ce revenu ?')) {
    } else {
      console.log('ne pas supprimer');
    }
  }
}
