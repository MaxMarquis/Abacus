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
var calendrier_component_1 = require("./components/calendrier/calendrier.component");
var calculatrice_component_1 = require("./components/calculatrice/calculatrice.component");
// Pages
var authentification_component_1 = require("./views/authentification/authentification.component");
var deconnexion_component_1 = require("./views/deconnexion/deconnexion.component");
var tableau_de_bord_component_1 = require("./views/tableau-de-bord/tableau-de-bord.component");
var sommaire_component_1 = require("./views/sommaire/sommaire.component");
var sommaire_depenses_component_1 = require("./views/sommaire-depenses/sommaire-depenses.component");
var sommaire_revenus_component_1 = require("./views/sommaire-revenus/sommaire-revenus.component");
var ajout_depense_component_1 = require("./views/ajout-depense/ajout-depense.component");
var ajout_revenu_component_1 = require("./views/ajout-revenu/ajout-revenu.component");
var routes = [
    { path: '', component: authentification_component_1.AuthentificationComponent },
    { path: 'tableauDeBord', component: tableau_de_bord_component_1.TableauDeBordComponent },
    { path: 'sommaire', component: sommaire_component_1.SommaireComponent },
    { path: 'depenses-ajout', component: ajout_depense_component_1.AjoutDepenseComponent },
    { path: 'depenses', component: sommaire_depenses_component_1.SommaireDepensesComponent },
    { path: 'revenus-ajout', component: ajout_revenu_component_1.AjoutRevenuComponent },
    { path: 'revenus', component: sommaire_revenus_component_1.SommaireRevenusComponent },
    { path: 'calendrier', component: calendrier_component_1.CalendrierComponent },
    { path: 'calculatrice', component: calculatrice_component_1.CalculatriceComponent },
    { path: 'deconnexion', component: deconnexion_component_1.DeconnexionComponent },
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
