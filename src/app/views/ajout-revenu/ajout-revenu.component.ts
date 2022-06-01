import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanonicApiService } from 'src/app/services/canonic-api.service';
import { Revenu } from 'src/app/interface/revenu';
import { ToastService } from 'src/app/services/toast/toast-service';

@Component({
  selector: 'app-ajout-revenu',
  templateUrl: './ajout-revenu.component.html',
  styleUrls: ['./ajout-revenu.component.sass']
})

export class AjoutRevenuComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  isValidMontantError: string = "";
  balance: number = 0;
  incomeList!: Revenu[];

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal, public toastService: ToastService) { }

  // * fonction pour afficher la liste des revenus
  ngOnInit() {
    this.canonicApiService.getIncomeList().subscribe(
      (response: any) => {
        console.log(response);
        this.incomeList = response.data;
      },
      () => console.log('error')
    );
  }

  // * cette partie concerne l'ajout de revenu
  @Input() revenu: Revenu = { _id: '', description: '', montant: 1, date: new Date, updatedAt: '', createdAt: '', }
  @Output() majTableau = new EventEmitter();

  addIncome(): void {
    this.canonicApiService.addIncome(this.revenu).subscribe();
    location.reload();
  }

  onSave(addIncome: NgForm) {
    console.log(addIncome);
    if (addIncome.valid) {
      if (this.revenu._id != null && this.revenu._id != '') {
        this.canonicApiService.editIncome(this.revenu).subscribe(_ => { this.majTableau.emit() });
        location.reload();
      }
      else {
        if (this.revenu.montant > 0 && this.revenu.description != '') {
          this.incomeList.push(this.revenu);
          this.addIncome();
          this.toastService.show('Revenu ajouté', { classname: 'bg-success text-light', delay: 5000 });
        } else {
          this.toastService.show('Veullez remplir les champs ', { classname: 'bg-danger text-light', delay: 5000 });
        }
      }
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
    this.canonicApiService.removeIncome(revenu)
      .subscribe(_result => this.incomeList = this.incomeList)
    if (confirm('Voulez vous supprimer ce revenu ?')) {
    } else {
      console.log('ne pas supprimer');

    }

    location.reload(); // Pour reload le graphique
  }
}