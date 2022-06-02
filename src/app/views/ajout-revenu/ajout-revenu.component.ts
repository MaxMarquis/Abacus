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
import { ToastService } from 'src/app/services/toast/toast-service';

@Component({
  selector: 'app-ajout-revenu',
  templateUrl: './ajout-revenu.component.html',
  styleUrls: ['./ajout-revenu.component.sass'],
})
export class AjoutRevenuComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = '';
  balance: number = 0;
  incomeList: Revenu[] = [];

  constructor(
    private modalService: NgbModal,
    public toastService: ToastService,
    private incomeService: IncomeService
  ) {}

  // * fonction pour afficher la liste des revenus
  ngOnInit() {
    this.incomeService.incomesList$.subscribe(
      (incomes) => (this.incomeList = incomes)
    );
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
        this.toastService.show('Revenu ajouté', {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      }
    } else {
      this.toastService.show('Veullez remplir les champs ', {
        classname: 'bg-danger text-light',
        delay: 5000,
      });
    }
  }

  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }
  deleteIncome(id: number) {
    this.incomeList = this.incomeList.filter((v, i) => i !== id);
  }

  // Delete Income
  removeIncome(revenu: Revenu): void {
    if (confirm('Voulez vous supprimer ce revenu ?')) {
      this.incomeService.removeIncome(revenu);
    } else {
      console.log('ne pas supprimer');
    }
  }
}
