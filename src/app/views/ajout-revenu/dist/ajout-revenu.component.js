"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AjoutRevenuComponent = void 0;
var uuid_1 = require("uuid");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_1 = require("src/environments/environment");
var AjoutRevenuComponent = /** @class */ (function () {
    function AjoutRevenuComponent(fb, storageService, modalService) {
        var _this = this;
        this.fb = fb;
        this.storageService = storageService;
        this.modalService = modalService;
        this.isValidMontantError = "";
        this.storageIncomeKey = environment_1.environment.storageIncomeKey;
        this.storageExpenseKey = environment_1.environment.storageExpenseKey;
        this.balance = 0;
        this.incomeList = [];
        this.createForm();
        this.storageService.incomeList.subscribe(function (value) {
            _this.incomeList = value;
        });
        this.storageService.balanceValue.subscribe(function (value) {
            _this.balance = value;
        });
    }
    AjoutRevenuComponent.prototype.createForm = function () {
        this.submitForm = this.fb.group({
            description: ['', forms_1.Validators.required],
            montant: [0, [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9-.]+[0-9-.]*$")]],
            date: [Date.now, forms_1.Validators.required]
        });
    };
    AjoutRevenuComponent.prototype.onSubmit = function () {
        this.details = this.submitForm.value;
        this.details.id = uuid_1.v4();
        this.storageService.addIncome(this.details);
        this.submitForm.reset({
            description: '',
            montant: 0,
            date: new Date(),
            "if": alert("revenu ajouté")
        });
        this.incomeList.push(this.details);
        this.feedbackFormDirective.resetForm();
        location.reload(); // Pour reload le graphique
    };
    AjoutRevenuComponent.prototype.openCalculatorModal = function (content) {
        this.modalService.open(content);
    };
    AjoutRevenuComponent.prototype.deleteIncome = function (id) {
        this.incomeList = this.incomeList.filter(function (v, i) { return i !== id; });
    };
    __decorate([
        core_1.ViewChild('fform')
    ], AjoutRevenuComponent.prototype, "feedbackFormDirective");
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
