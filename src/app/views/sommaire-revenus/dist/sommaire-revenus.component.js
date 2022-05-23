"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SommaireRevenusComponent = void 0;
var core_1 = require("@angular/core");
var SommaireRevenusComponent = /** @class */ (function () {
    function SommaireRevenusComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.incomeList = [];
        this.storageService.incomeList.subscribe(function (value) {
            _this.incomeList = value;
        });
    }
    // Delete Income
    SommaireRevenusComponent.prototype.removeIncome = function (d) {
        if (confirm('Voulez vous supprimer votre revenu ?')) {
            this.storageService.removeIncome(d);
        }
        else {
            console.log('ne pas supprimer');
        }
        location.reload(); // Pour reload le graphique
    };
    SommaireRevenusComponent.prototype.deleteIncome = function (id) {
        this.incomeList = this.incomeList.filter(function (v, i) { return i !== id; });
    };
    SommaireRevenusComponent.prototype.ngOnInit = function () {
    };
    SommaireRevenusComponent = __decorate([
        core_1.Component({
            selector: 'app-sommaire-revenus',
            templateUrl: './sommaire-revenus.component.html',
            styleUrls: ['./sommaire-revenus.component.sass']
        })
    ], SommaireRevenusComponent);
    return SommaireRevenusComponent;
}());
exports.SommaireRevenusComponent = SommaireRevenusComponent;
