"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IncomeComponentComponent = void 0;
var core_1 = require("@angular/core");
var IncomeComponentComponent = /** @class */ (function () {
    function IncomeComponentComponent(canonicApiService, modalService) {
        this.canonicApiService = canonicApiService;
        this.modalService = modalService;
        this.isValidMontantError = "";
        this.balance = 0;
        this.incomeList = [];
        this.revenu = { _id: '', description: '', montant: 0, date: new Date, updatedAt: '', createdAt: '' };
        this.majTableau = new core_1.EventEmitter();
    }
    // * fonction pour afficher la liste des revenus
    IncomeComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canonicApiService.getIncomeList().subscribe(function (response) {
            console.log(response);
            _this.revenu = response.data;
        }, function () { return console.log('error'); });
    };
    // Delete Income
    IncomeComponentComponent.prototype.removeIncome = function (revenu) {
        var _this = this;
        this.canonicApiService.removeIncome(revenu)
            .subscribe(function (_result) { return _this.incomeList = _this.incomeList; });
        if (confirm('Voulez vous supprimer cette dépense ?')) {
        }
        else {
            console.log('ne pas supprimer');
        }
        location.reload(); // Pour reload le graphique
    };
    IncomeComponentComponent.prototype.addIncome = function () {
        console.log(this.revenu);
        this.canonicApiService.addIncome(this.revenu).subscribe();
    };
    IncomeComponentComponent.prototype.onSave = function (addIncome) {
        var _this = this;
        console.log(addIncome);
        if (addIncome.valid) {
            alert('Veuillez remplir les champs');
            if (this.revenu._id != null && this.revenu._id != '') {
                this.canonicApiService.editIncome(this.revenu).subscribe(function (_) { _this.majTableau.emit(); });
            }
            else {
                this.addIncome();
            }
        }
        this.feedbackFormDirective.resetForm();
        location.reload(); // Pour reload le graphique
    };
    IncomeComponentComponent.prototype.openCalculatorModal = function (content) {
        this.modalService.open(content);
    };
    __decorate([
        core_1.ViewChild('fform')
    ], IncomeComponentComponent.prototype, "feedbackFormDirective");
    __decorate([
        core_1.Input()
    ], IncomeComponentComponent.prototype, "revenu");
    __decorate([
        core_1.Output()
    ], IncomeComponentComponent.prototype, "majTableau");
    IncomeComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-income-component',
            templateUrl: './income-component.component.html',
            styleUrls: ['./income-component.component.sass']
        })
    ], IncomeComponentComponent);
    return IncomeComponentComponent;
}());
exports.IncomeComponentComponent = IncomeComponentComponent;
