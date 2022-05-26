"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SommaireDepensesComponent = void 0;
var core_1 = require("@angular/core");
var SommaireDepensesComponent = /** @class */ (function () {
    function SommaireDepensesComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.expenseList = [];
        // collapse fermé par default
        this.isCollapsed = true;
        this.storageService.expenseList.subscribe(function (value) {
            _this.expenseList = value;
        });
    }
    SommaireDepensesComponent.prototype.doFilter = function (dateO, dateT) {
        this.dateOne = ((dateO.value.trim() == "") ? undefined : new Date(dateO.value));
        this.dateTwo = ((dateT.value.trim() == "") ? undefined : new Date(dateT.value));
    };
    // Delete Expense
    SommaireDepensesComponent.prototype.removeExpense = function (d) {
        if (confirm('Êtes-vous sur de vouloir supprimer cette donnée ?')) {
            this.storageService.removeExpense(d);
        }
        else {
            console.log('ne pas supprimer');
        }
        location.reload(); // Pour reload le graphique
    };
    SommaireDepensesComponent.prototype.deleteExpense = function (id) {
        this.expenseList = this.expenseList.filter(function (v, i) { return i !== id; });
    };
    SommaireDepensesComponent.prototype.ngOnInit = function () {
    };
    SommaireDepensesComponent = __decorate([
        core_1.Component({
            selector: 'app-sommaire-depenses',
            templateUrl: './sommaire-depenses.component.html',
            styleUrls: ['./sommaire-depenses.component.sass']
        })
    ], SommaireDepensesComponent);
    return SommaireDepensesComponent;
}());
exports.SommaireDepensesComponent = SommaireDepensesComponent;
