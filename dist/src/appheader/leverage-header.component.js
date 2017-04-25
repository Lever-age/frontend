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
var core_1 = require('@angular/core');
var leverageheader_service_1 = require('../appheader/service/leverageheader.service');
var HeaderComponent = (function () {
    function HeaderComponent(leverageHeaderService) {
        this.leverageHeaderService = leverageHeaderService;
        this.leverageMenu = this.leverageHeaderService.loadMenu();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.leverageMenu = this.leverageHeaderService.loadMenu();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'leverage-header',
            template: "\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav\"> \n            <li *ngFor=\"let item of leverageMenu\"\n              class=\"dropdown\"\n              [routerLink]=\"item.link\"\n              [routerLinkActive]=\"item.linkactive\"\n              [routerLinkActiveOptions]=\"{ exact: item.exact }\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                {{item.name}}\n              </a>\n              <ul *ngIf=\"item.subMenuItem\" class=\"dropdown-menu\">\n                <li *ngFor=\"let subMenuItems of item.subMenuItem\">\n                  <a routerLink=\"/candidatelist\" href=\"javascript:void(0)\">\n                    {{subMenuItems.name}}\n                  </a>\n                </li>\n              </ul>\n            </li>       \n          </ul>\n        </div>\n      </div>\n    </nav>\n    ",
            providers: [leverageheader_service_1.LeverageHeaderService]
        }), 
        __metadata('design:paramtypes', [leverageheader_service_1.LeverageHeaderService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=leverage-header.component.js.map