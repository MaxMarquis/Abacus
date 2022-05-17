"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SommaireComponent = void 0;
var core_1 = require("@angular/core");
var SommaireComponent = /** @class */ (function () {
    function SommaireComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.incomeExpenseList = [];
        this.storageService.incomeExpenseList.subscribe(function (value) {
            _this.incomeExpenseList = value;
        });
    }
    SommaireComponent.prototype.ngOnInit = function () {
    };
    SommaireComponent = __decorate([
        core_1.Component({
            selector: 'app-sommaire',
            templateUrl: './sommaire.component.html',
            styleUrls: ['./sommaire.component.sass']
        })
    ], SommaireComponent);
    return SommaireComponent;
}());
exports.SommaireComponent = SommaireComponent;
