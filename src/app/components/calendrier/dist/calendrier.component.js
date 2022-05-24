"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalendrierComponent = void 0;
var core_1 = require("@angular/core");
var CalendrierComponent = /** @class */ (function () {
    function CalendrierComponent(calendar) {
        this.hoveredDate = null;
        this.toDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    CalendrierComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    CalendrierComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    CalendrierComponent.prototype.isInside = function (date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    };
    CalendrierComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    };
    CalendrierComponent = __decorate([
        core_1.Component({
            selector: 'app-calendrier',
            templateUrl: './calendrier.component.html',
            styleUrls: ['./calendrier.component.sass']
        })
    ], CalendrierComponent);
    return CalendrierComponent;
}());
exports.CalendrierComponent = CalendrierComponent;
