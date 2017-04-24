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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var ngx_dropdown_1 = require("ngx-dropdown");
var homepage_component_routes_1 = require('./homepage.component.routes');
var homepage_component_1 = require('./homepage/homepage.component');
var aboutpage_component_1 = require('./aboutpage/aboutpage.component');
var leveragefooter_component_1 = require('./appfooter/leveragefooter.component');
var leverageheader_component_1 = require('./appheader/leverageheader.component');
var not_found_component_1 = require('./notfound/not-found.component');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ngx_dropdown_1.DropdownModule,
                router_1.RouterModule.forRoot(homepage_component_routes_1.leverageroutes)
            ],
            declarations: [app_component_1.AppComponent, homepage_component_1.HomepageComponent, aboutpage_component_1.AboutPageComponent,
                leveragefooter_component_1.FooterComponent, leverageheader_component_1.HeaderComponent, not_found_component_1.NotFoundComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map