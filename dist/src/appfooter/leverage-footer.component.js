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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'leverage-footer',
        template: "\n  <div class=\"footer-container navbar-fixed-bottom\">\n    <div class=\"pull-left\"><p class=\"footer-text\">Leverage</p></div>\n    <div class=\"pull-right\"><p class=\"footer-text\">Contact Us</p></div>\n  </div>\n  ",
        styles: ["\n.footer-container {\n    width: 100%;\n    background-color: gray;\n    height: 50px;\n}\n.footer-text {\n    height: 50px;\n    line-height: 50px;\n    font-size: 14px;\n    color: #fff;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n"]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=leverage-footer.component.js.map