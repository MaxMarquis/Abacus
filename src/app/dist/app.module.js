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
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_clipboard_1 = require("ngx-clipboard");
var ng2_charts_1 = require("ng2-charts");
var storage_service_service_1 = require("./services/storage-service.service");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./views/home/home.component");
var calculatrice_component_1 = require("./components/calculatrice/calculatrice.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var rapports_component_1 = require("./components/rapports/rapports.component");
var tableau_de_bord_component_1 = require("./components/tableau-de-bord/tableau-de-bord.component");
var aide_component_1 = require("./components/aide/aide.component");
var deconnexion_component_1 = require("./components/deconnexion/deconnexion.component");
var calendrier_component_1 = require("./components/calendrier/calendrier.component");
var expense_component_component_1 = require("./expense-component/expense-component.component");
var income_component_component_1 = require("./income-component/income-component.component");
var charts_component_1 = require("./components/charts/charts.component");
var sommaire_component_1 = require("./components/sommaire/sommaire.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                calculatrice_component_1.CalculatriceComponent,
                navbar_component_1.NavbarComponent,
                rapports_component_1.RapportsComponent,
                tableau_de_bord_component_1.TableauDeBordComponent,
                aide_component_1.AideComponent,
                deconnexion_component_1.DeconnexionComponent,
                calendrier_component_1.CalendrierComponent,
                expense_component_component_1.ExpenseComponentComponent,
                income_component_component_1.IncomeComponentComponent,
                charts_component_1.ChartsComponent,
                sommaire_component_1.SommaireComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_2.ReactiveFormsModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
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
