"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculatriceComponent = void 0;
var core_1 = require("@angular/core");
var copy_text_to_clipboard_1 = require("copy-text-to-clipboard");
var CalculatriceComponent = /** @class */ (function () {
    function CalculatriceComponent() {
        this.input = '';
        this.result = '';
    }
    CalculatriceComponent.prototype.pressNum = function (num) {
        //Do Not Allow . more than once
        if (num == ".") {
            if (this.input != "") {
                var lastNum = this.getLastOperand();
                console.log(lastNum.lastIndexOf("."));
                if (lastNum.lastIndexOf(".") >= 0)
                    return;
            }
        }
        //Do Not Allow 0 at beginning. 
        //Javascript will throw Octal literals are not allowed in strict mode.
        if (num == "0") {
            if (this.input == "") {
                return;
            }
            var PrevKey = this.input[this.input.length - 1];
            if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
                return;
            }
        }
        this.input = this.input + num;
        this.calcAnswer();
    };
    CalculatriceComponent.prototype.getLastOperand = function () {
        var pos;
        console.log(this.input);
        pos = this.input.toString().lastIndexOf("+");
        if (this.input.toString().lastIndexOf("-") > pos)
            pos = this.input.lastIndexOf("-");
        if (this.input.toString().lastIndexOf("*") > pos)
            pos = this.input.lastIndexOf("*");
        if (this.input.toString().lastIndexOf("/") > pos)
            pos = this.input.lastIndexOf("/");
        console.log('Last ' + this.input.substr(pos + 1));
        return this.input.substr(pos + 1);
    };
    CalculatriceComponent.prototype.pressOperator = function (op) {
        //Do not allow operators more than once
        var lastKey = this.input[this.input.length - 1];
        if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
            return;
        }
        this.input = this.input + op;
        this.calcAnswer();
    };
    CalculatriceComponent.prototype.clear = function () {
        if (this.input != "") {
            this.input = this.input.substr(0, this.input.length - 1);
        }
    };
    CalculatriceComponent.prototype.allClear = function () {
        this.result = '';
        this.input = '';
    };
    CalculatriceComponent.prototype.calcAnswer = function () {
        var formula = this.input;
        var lastKey = formula[formula.length - 1];
        if (lastKey === '.') {
            formula = formula.substr(0, formula.length - 1);
        }
        lastKey = formula[formula.length - 1];
        if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
            formula = formula.substr(0, formula.length - 1);
        }
        console.log("Formula " + formula);
        this.result = eval(formula);
    };
    CalculatriceComponent.prototype.getAnswer = function () {
        this.calcAnswer();
        this.input = this.result;
        if (this.input == "0")
            this.input = "";
    };
    CalculatriceComponent.prototype.copyResult = function () {
        copy_text_to_clipboard_1["default"](this.result.toString());
        alert("Montant copié");
    };
    CalculatriceComponent = __decorate([
        core_1.Component({
            selector: 'app-calculatrice',
            templateUrl: './calculatrice.component.html',
            styleUrls: ['./calculatrice.component.sass']
        })
    ], CalculatriceComponent);
    return CalculatriceComponent;
}());
exports.CalculatriceComponent = CalculatriceComponent;
