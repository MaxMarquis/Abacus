import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { Revenu } from 'src/app/interface/revenu';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-ajout-revenu',
  templateUrl: './ajout-revenu.component.html',
  styleUrls: ['./ajout-revenu.component.sass'],
})
export class AjoutRevenuComponent {
  constructor(
    private canonicApiService: CanonicApiService,
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
    console.log(this.revenu);
    this.canonicApiService.addIncome(this.revenu).subscribe();
  }

  onSave(addIncome: NgForm) {
    console.log(addIncome);
    if (addIncome.valid) {
      if (this.revenu._id != null && this.revenu._id != '') {
        this.canonicApiService.editIncome(this.revenu).subscribe((_) => {
          this.majTableau.emit();
        });
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
