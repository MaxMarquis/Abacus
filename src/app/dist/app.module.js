"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_clipboard_1 = require("ngx-clipboard");
var ng2_charts_1 = require("ng2-charts");
var storage_service_service_1 = require("./services/storage-service.service");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var calculatrice_component_1 = require("./components/calculatrice/calculatrice.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var calendrier_component_1 = require("./components/calendrier/calendrier.component");
var expense_component_component_1 = require("./expense-component/expense-component.component");
var income_component_component_1 = require("./income-component/income-component.component");
var charts_component_1 = require("./components/charts/charts.component");
var authentification_component_1 = require("./views/authentification/authentification.component");
var deconnexion_component_1 = require("./views/deconnexion/deconnexion.component");
var tableau_de_bord_component_1 = require("./views/tableau-de-bord/tableau-de-bord.component");
var sommaire_component_1 = require("./views/sommaire/sommaire.component");
var sommaire_depenses_component_1 = require("./views/sommaire-depenses/sommaire-depenses.component");
var sommaire_revenus_component_1 = require("./views/sommaire-revenus/sommaire-revenus.component");
var ajout_depense_component_1 = require("./views/ajout-depense/ajout-depense.component");
var ajout_revenu_component_1 = require("./views/ajout-revenu/ajout-revenu.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                calculatrice_component_1.CalculatriceComponent,
                navbar_component_1.NavbarComponent,
                calendrier_component_1.CalendrierComponent,
                LoginComponent,
                expense_component_component_1.ExpenseComponentComponent,
                income_component_component_1.IncomeComponentComponent,
                charts_component_1.ChartsComponent,
                authentification_component_1.AuthentificationComponent,
                deconnexion_component_1.DeconnexionComponent,
                tableau_de_bord_component_1.TableauDeBordComponent,
                sommaire_component_1.SommaireComponent,
                sommaire_depenses_component_1.SommaireDepensesComponent,
                sommaire_revenus_component_1.SommaireRevenusComponent,
                ajout_depense_component_1.AjoutDepenseComponent,
                ajout_revenu_component_1.AjoutRevenuComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                forms_2.ReactiveFormsModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_clipboard_1.ClipboardModule,
                ng2_charts_1.NgChartsModule,
            ],
            providers: [storage_service_service_1.StorageServiceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
