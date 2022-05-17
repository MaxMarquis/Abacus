"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var calculatrice_component_1 = require("./components/calculatrice/calculatrice.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var rapports_component_1 = require("./components/rapports/rapports.component");
var tableau_de_bord_component_1 = require("./components/tableau-de-bord/tableau-de-bord.component");
var aide_component_1 = require("./components/aide/aide.component");
var deconnexion_component_1 = require("./components/deconnexion/deconnexion.component");
var calendrier_component_1 = require("./components/calendrier/calendrier.component");
var expense_component_component_1 = require("./expense-component/expense-component.component");
var income_component_component_1 = require("./income-component/income-component.component");
var home_component_1 = require("./views/home/home.component");
var sommaire_component_1 = require("./components/sommaire/sommaire.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'calculatrice', component: calculatrice_component_1.CalculatriceComponent },
    { path: 'navbar', component: navbar_component_1.NavbarComponent },
    { path: 'rapports', component: rapports_component_1.RapportsComponent },
    { path: 'tableauDeBord', component: tableau_de_bord_component_1.TableauDeBordComponent },
    { path: 'aide', component: aide_component_1.AideComponent },
    { path: 'deconnexion', component: deconnexion_component_1.DeconnexionComponent },
    { path: 'calendrier', component: calendrier_component_1.CalendrierComponent },
    { path: 'depenses', component: expense_component_component_1.ExpenseComponentComponent },
    { path: 'sommaire', component: sommaire_component_1.SommaireComponent },
    { path: 'revenus', component: income_component_component_1.IncomeComponentComponent },
    { path: 'calendrier', component: calendrier_component_1.CalendrierComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
