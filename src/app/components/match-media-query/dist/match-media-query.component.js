"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MatchMediaQueryComponent = void 0;
var core_1 = require("@angular/core");
var MatchMediaQueryComponent = /** @class */ (function () {
    function MatchMediaQueryComponent() {
        this.mediaQuery = null;
        this.DEFAULT_MEDIA_QUERY = "(min-width: 0px)";
        this.matches = false;
    }
    MatchMediaQueryComponent.prototype.ngOnInit = function () {
        console.log(this.mediaQuery);
        window.addEventListener("resize", this.checkMediaQuery.bind(this));
        this.checkMediaQuery();
    };
    MatchMediaQueryComponent.prototype.checkMediaQuery = function () {
        if (!this.mediaQuery)
            return;
        try {
            this.matches = window.matchMedia(this.mediaQuery).matches;
        }
        catch (e) {
            var error = e;
            this.matches = window.matchMedia(this.DEFAULT_MEDIA_QUERY).matches;
            console.error(error.message);
        }
    };
    __decorate([
        core_1.Input()
    ], MatchMediaQueryComponent.prototype, "mediaQuery");
    MatchMediaQueryComponent = __decorate([
        core_1.Component({
            selector: 'app-match-media-query',
            templateUrl: './match-media-query.component.html',
            styleUrls: ['./match-media-query.component.sass']
        })
    ], MatchMediaQueryComponent);
    return MatchMediaQueryComponent;
}());
exports.MatchMediaQueryComponent = MatchMediaQueryComponent;
