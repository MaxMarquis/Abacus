"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AjoutRevenuComponent = void 0;
var core_1 = require("@angular/core");
var AjoutRevenuComponent = /** @class */ (function () {
    function AjoutRevenuComponent(canonicApiService, modalService, toastService) {
        this.canonicApiService = canonicApiService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.isValidMontantError = "";
        this.balance = 0;
        // * cette partie concerne l'ajout de revenu
        this.revenu = { _id: '', description: '', montant: 1, date: new Date, updatedAt: '', createdAt: '' };
        this.majTableau = new core_1.EventEmitter();
    }
    // * fonction pour afficher la liste des revenus
    AjoutRevenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canonicApiService.getIncomeList().subscribe(function (response) {
            console.log(response);
            _this.incomeList = response.data;
        }, function () { return console.log('error'); });
    };
    AjoutRevenuComponent.prototype.addIncome = function () {
        this.canonicApiService.addIncome(this.revenu).subscribe();
        location.reload();
    };
    AjoutRevenuComponent.prototype.onSave = function (addIncome) {
        var _this = this;
        console.log(addIncome);
        if (addIncome.valid) {
            if (this.revenu._id != null && this.revenu._id != '') {
                this.canonicApiService.editIncome(this.revenu).subscribe(function (_) { _this.majTableau.emit(); });
                location.reload();
            }
            else {
                if (this.revenu.montant > 0 && this.revenu.description != '') {
                    this.incomeList.push(this.revenu);
                    this.addIncome();
                    this.toastService.show('Revenu ajouté', { classname: 'bg-success text-light', delay: 5000 });
                }
                else {
                    this.toastService.show('Veullez remplir les champs ', { classname: 'bg-danger text-light', delay: 5000 });
                }
            }
        }
    };
    AjoutRevenuComponent.prototype.openCalculatorModal = function (content) {
        this.modalService.open(content);
    };
    AjoutRevenuComponent.prototype.deleteIncome = function (id) {
        this.incomeList = this.incomeList.filter(function (v, i) { return i !== id; });
    };
    // Delete Income
    AjoutRevenuComponent.prototype.removeIncome = function (revenu) {
        var _this = this;
        this.canonicApiService.removeIncome(revenu)
            .subscribe(function (_result) { return _this.incomeList = _this.incomeList; });
        if (confirm('Voulez vous supprimer ce revenu ?')) {
        }
        else {
            console.log('ne pas supprimer');
        }
        location.reload(); // Pour reload le graphique
    };
    __decorate([
        core_1.ViewChild('fform')
    ], AjoutRevenuComponent.prototype, "feedbackFormDirective");
    __decorate([
        core_1.Input()
    ], AjoutRevenuComponent.prototype, "revenu");
    __decorate([
        core_1.Output()
    ], AjoutRevenuComponent.prototype, "majTableau");
    AjoutRevenuComponent = __decorate([
        core_1.Component({
            selector: 'app-ajout-revenu',
            templateUrl: './ajout-revenu.component.html',
            styleUrls: ['./ajout-revenu.component.sass']
        })
    ], AjoutRevenuComponent);
    return AjoutRevenuComponent;
}());
exports.AjoutRevenuComponent = AjoutRevenuComponent;
