"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        this.expenseList = [];
        // * cette partie concerne l'ajout des dépenses.
        this.depense = { _id: '', description: '', montant: 0, date: new Date, depenseBalance: 0, updatedAt: '', createdAt: '' };
        this.majTableau = new core_1.EventEmitter();
    }
    // * fonction pour afficher la liste des dépenses
    AjoutDepenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canonicApiService.getExpenseList().subscribe(function (response) {
            console.log(response);
            response.data.date = new Date(response.data.date);
            _this.expenseList = response.data;
        }, function () { return console.log('error'); });
    };
    AjoutDepenseComponent.prototype.formatDepense = function () {
        var _a = this.depense.date.split("-"), year = _a[0], month = _a[1], date = _a[2];
        return __assign(__assign({}, this.depense), { date: new Date(Number(year), Number(month) - 1, Number(date)) });
    };
    AjoutDepenseComponent.prototype.addExpense = function () {
        console.log(this.depense);
        this.canonicApiService.addExpense(this.formatDepense()).subscribe();
    };
    AjoutDepenseComponent.prototype.onSave = function (addExpense) {
        var _this = this;
        console.log(addExpense);
        if (addExpense.valid) {
            if (this.depense._id != null && this.depense._id != '') {
                this.canonicApiService.editExpense(this.formatDepense()).subscribe(function (_) { _this.majTableau.emit(); });
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
        this.expenseList.push(this.formatDepense());
        // Pour reload le graphique
        location.reload();
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
