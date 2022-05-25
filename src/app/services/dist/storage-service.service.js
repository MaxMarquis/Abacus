"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StorageServiceService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("src/environments/environment");
var StorageServiceService = /** @class */ (function () {
    function StorageServiceService() {
        this.storageIncomeKey = environment_1.environment.storageIncomeKey;
        this.storageExpenseKey = environment_1.environment.storageExpenseKey;
        this.balanceValue = new rxjs_1.BehaviorSubject(0);
        this.incomeList = new rxjs_1.BehaviorSubject([]);
        this.expenseList = new rxjs_1.BehaviorSubject([]);
        this.incomeExpenseList = new rxjs_1.BehaviorSubject([]);
        this.getBalance();
        this.incomeList.next(this.getIncomeList());
        this.expenseList.next(this.getExpenseList());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    }
    StorageServiceService.prototype.getIncomeList = function () {
        var incomeList = [];
        var incomeString = localStorage.getItem(this.storageIncomeKey);
        if (incomeString != null) {
            incomeList = JSON.parse(incomeString);
        }
        return incomeList;
    };
    StorageServiceService.prototype.getExpenseList = function () {
        var expenseList = [];
        var expenseString = localStorage.getItem(this.storageExpenseKey);
        if (expenseString != null) {
            expenseList = JSON.parse(expenseString);
        }
        return expenseList;
    };
    StorageServiceService.prototype.getBalance = function () {
        var income = 0;
        var expense = 0;
        var incomeList = this.getIncomeList();
        var expenseList = this.getExpenseList();
        incomeList.forEach(function (element) {
            income += element.montant;
        });
        expenseList.forEach(function (element) {
            expense += element.montant;
        });
        var value = (income - expense);
        this.balanceValue.next(value);
        return income - expense;
    };
    StorageServiceService.prototype.addIncome = function (income) {
        var incomeList = this.getIncomeList();
        income.isIncome = true;
        incomeList.push(income);
        localStorage.setItem(this.storageIncomeKey, JSON.stringify(incomeList));
        this.incomeList.next(incomeList);
        this.balanceValue.next(this.getBalance());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    };
    StorageServiceService.prototype.addExpense = function (expense) {
        var expenseList = this.getExpenseList();
        expenseList.push(expense);
        localStorage.setItem(this.storageExpenseKey, JSON.stringify(expenseList));
        this.expenseList.next(expenseList);
        this.balanceValue.next(this.getBalance());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    };
    StorageServiceService.prototype.getIncomeExpenseList = function () {
        var incomeList = this.getIncomeList();
        var expenseList = this.getExpenseList();
        var incomeExpenseList = incomeList.concat(expenseList);
        incomeExpenseList.sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        return incomeExpenseList;
    };
    StorageServiceService.prototype.removeIncome = function (income) {
        var incomeList = this.getIncomeList();
        incomeList.filter(function (element) {
            if (element.id === income.id) {
                incomeList.splice(incomeList.indexOf(element), 1);
            }
        });
        this.incomeList.next(incomeList);
        localStorage.setItem(this.storageIncomeKey, JSON.stringify(incomeList));
        console.log("Remove Income.....");
        this.balanceValue.next(this.getBalance());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    };
    StorageServiceService.prototype.removeExpense = function (expense) {
        var expenseList = this.getExpenseList();
        expenseList.filter(function (element) {
            if (element.id === expense.id) {
                expenseList.splice(expenseList.indexOf(element), 1);
            }
        });
        this.expenseList.next(expenseList);
        localStorage.setItem(this.storageExpenseKey, JSON.stringify(expenseList));
        this.balanceValue.next(this.getBalance());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    };
    StorageServiceService.prototype.clearIncome = function () {
        localStorage.removeItem(this.storageIncomeKey);
        this.incomeList.next([]);
        this.balanceValue.next(this.getBalance());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    };
    StorageServiceService.prototype.clearExpense = function () {
        localStorage.removeItem(this.storageExpenseKey);
        this.expenseList.next([]);
        this.balanceValue.next(this.getBalance());
        this.incomeExpenseList.next(this.getIncomeExpenseList());
    };
    StorageServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StorageServiceService);
    return StorageServiceService;
}());
exports.StorageServiceService = StorageServiceService;
