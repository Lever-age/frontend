"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.nav = [
            {
                link: '/',
                name: 'Home',
                exact: true,
                linkactive: 'active',
                dropdown: false
            },
            {
                name: 'Current Elections',
                exact: true,
                linkactive: 'inactive',
                dropdown: true,
                dropdownlinks: ['District Attorney Elections', 'City Controller Elections'],
            },
            {
                link: '/about',
                name: 'About',
                exact: true,
                linkactive: 'active',
                dropdown: false
            }
        ];
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'leverage-header',
        template: "\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n         <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" \n            data-target=\"#navbar-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav\"> \n\n            <!-- Dynamically generates header links from the nav array -->\n            <!-- Add new navigation objects to the nav array -->\n            <li\n              *ngFor=\"let item of nav\"\n              class=\"dropdown\" dropdown\n              [routerLink]=\"item.link\"\n              [routerLinkActive]=\"item.linkactive\"\n              [routerLinkActiveOptions]=\"{ exact: item.exact }\">\n\n              <!-- Generates non-dropdown navigation links -->\n              <a *ngIf=\"item.dropdown === false\" class=\"nav-link\">\n                {{ item.name }}\n              </a>\n\n              <!-- Generates dropdown navigation links -->\n              <a *ngIf=\"item.dropdown === true\" dropdown-open>\n                {{ item.name }} <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li \n                  *ngFor=\"let link of item.dropdownlinks\">\n                  <a> {{ link }} </a></li>\n              </ul>\n\n            </li>       \n          </ul>\n        </div>\n      </div>\n    </nav>\n    "
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=leverage-header.component.js.map