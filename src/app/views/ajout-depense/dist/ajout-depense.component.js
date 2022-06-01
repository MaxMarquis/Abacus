"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AjoutDepenseComponent = void 0;
var core_1 = require("@angular/core");
var AjoutDepenseComponent = /** @class */ (function () {
    function AjoutDepenseComponent(canonicApiService, modalService, toastService) {
        this.canonicApiService = canonicApiService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.isValidMontantError = "";
        this.balance = 0;
        // * cette partie concerne l'ajout des dépenses.
        this.depense = { _id: '', description: '', montant: 1, date: new Date, updatedAt: '', createdAt: '' };
        this.majTableau = new core_1.EventEmitter();
    }
    // * fonction pour afficher la liste des dépenses
    AjoutDepenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canonicApiService.getExpenseList().subscribe(function (response) {
            console.log(response);
            _this.expenseList = response.data;
        }, function () { return console.log('error'); });
    };
    AjoutDepenseComponent.prototype.addExpense = function () {
        this.canonicApiService.addExpense(this.depense).subscribe();
        // Pour reload le graphique 
        location.reload();
    };
    AjoutDepenseComponent.prototype.onSave = function (addExpense) {
        var _this = this;
        console.log(addExpense);
        if (addExpense.valid) {
            if (this.depense._id != null && this.depense._id != '') {
                this.canonicApiService.editExpense(this.depense).subscribe(function (_) { _this.majTableau.emit(); });
                location.reload();
            }
            else {
                if (this.depense.montant > 0 && this.depense.description != '') {
                    this.expenseList.push(this.depense);
                    this.addExpense();
                    this.toastService.show('Dépense ajoutée ', { classname: 'bg-success text-light', delay: 5000 });
                }
                else {
                    this.toastService.show('Veuillez remplir les champs', { classname: 'bg-danger text-light', delay: 5000 });
                }
            }
        }
    };
    AjoutDepenseComponent.prototype.openCalculatorModal = function (content) {
        this.modalService.open(content);
    };
    AjoutDepenseComponent.prototype.deleteExpense = function (id) {
        this.expenseList = this.expenseList.filter(function (v, i) { return i !== id; });
    };
    AjoutDepenseComponent.prototype.removeExpense = function (depense) {
        var _this = this;
        this.canonicApiService.removeExpense(depense)
            .subscribe(function (_result) { return _this.expenseList = _this.expenseList; });
        if (confirm('Voulez vous supprimer cette dépense ?')) {
        }
        else {
            console.log('ne pas supprimer');
        }
        location.reload(); // Pour reload le graphique
    };
    __decorate([
        core_1.ViewChild('fform')
    ], AjoutDepenseComponent.prototype, "feedbackFormDirective");
    __decorate([
        core_1.Input()
    ], AjoutDepenseComponent.prototype, "depense");
    __decorate([
        core_1.Output()
    ], AjoutDepenseComponent.prototype, "majTableau");
    AjoutDepenseComponent = __decorate([
        core_1.Component({
            selector: 'app-ajout-depense',
            templateUrl: './ajout-depense.component.html',
            styleUrls: ['./ajout-depense.component.sass']
        })
    ], AjoutDepenseComponent);
    return AjoutDepenseComponent;
}());
exports.AjoutDepenseComponent = AjoutDepenseComponent;
