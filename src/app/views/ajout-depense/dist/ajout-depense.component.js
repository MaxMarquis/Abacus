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
var uuid_1 = require("uuid");
var forms_1 = require("@angular/forms");
var environment_1 = require("src/environments/environment");
var AjoutDepenseComponent = /** @class */ (function () {
    function AjoutDepenseComponent(fb, storageService, modalService) {
        var _this = this;
        this.fb = fb;
        this.storageService = storageService;
        this.modalService = modalService;
        this.isValidMontantError = "";
        this.storageIncomeKey = environment_1.environment.storageIncomeKey;
        this.storageExpenseKey = environment_1.environment.storageExpenseKey;
        this.balance = 0;
        this.expenseList = [];
        this.createForm();
        this.storageService.expenseList.subscribe(function (value) {
            _this.expenseList = value;
        });
        this.storageService.balanceValue.subscribe(function (value) {
            _this.balance = value;
        });
    }
    AjoutDepenseComponent.prototype.createForm = function () {
        this.submitForm = this.fb.group({
            description: ['', forms_1.Validators.required],
            montant: [0, [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9-.]+[0-9]*$")]],
            date: [Date.now, forms_1.Validators.required]
        });
    };
    AjoutDepenseComponent.prototype.onSubmit = function () {
        this.details = this.submitForm.value;
        this.details.id = uuid_1.v4();
        this.storageService.addExpense(this.details);
        this.submitForm.reset({
            description: '',
            montant: 0,
            date: new Date(),
            "if": alert("Dépense ajoutée")
        });
        this.expenseList.push(this.details);
        this.feedbackFormDirective.resetForm();
        location.reload(); // Pour reload le graphique
    };
    AjoutDepenseComponent.prototype.openCalculatorModal = function (content) {
        this.modalService.open(content);
    };
    __decorate([
        core_1.ViewChild('fform')
    ], AjoutDepenseComponent.prototype, "feedbackFormDirective");
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
