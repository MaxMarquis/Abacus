"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChartsComponent = void 0;
var core_1 = require("@angular/core");
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        // Récupère les props afin de personnaliser le graphique
        this.height = '25';
        this.width = '25';
        this.dataList = [];
        // Création du graphique style Doughnut
        this.doughnutChartLabels = [];
        this.doughnutChartData = {
            labels: this.doughnutChartLabels,
            datasets: [{ data: [] }]
        };
        this.doughnutChartType = 'doughnut';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupère le data et envoie les descriptions dans doughnutChartLabels et les montants dans doughnutChartData
        this.dataList.map(function (x) {
            _this.doughnutChartLabels.push(x.description);
            _this.doughnutChartData.datasets[0].data.push(x.montant);
        });
    };
    __decorate([
        core_1.Input()
    ], ChartsComponent.prototype, "height");
    __decorate([
        core_1.Input()
    ], ChartsComponent.prototype, "width");
    __decorate([
        core_1.Input()
    ], ChartsComponent.prototype, "dataList");
    ChartsComponent = __decorate([
        core_1.Component({
            selector: 'app-charts',
            templateUrl: './charts.component.html',
            styleUrls: ['./charts.component.sass']
        })
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;
