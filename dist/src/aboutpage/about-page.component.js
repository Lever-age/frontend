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
var AboutPageComponent = (function () {
    function AboutPageComponent() {
        this.about = 'about';
    }
    AboutPageComponent = __decorate([
        core_1.Component({
            selector: 'leverage-about-page',
            template: "\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"page-header\">\n          <h1>About Leverage</h1>\n        </div>\n        <p>Leverage takes Philadelphia campaign finance data, analyzes it, and makes it easy for anyone to consume. Our goal is to empower citizens of Philadelphia to use campaign finance data when making informed decisions about who they donate to, who they support, and who they vote for.</p>\n\n        <p>The foundation of Leverage is the campaign finance data published by the City of Philadelphia. We apply machine learning techniques to the data to pull out trends and patterns. Finally, we add a layer of simple visualization on top of the analyzed data, allowing any citizen to access the information and understand how candidates are funded.</p>\n      </div>\n      <div class=\"row\">\n        <h2>Our Guiding Principles</h2>\n        <ul>\n          <li>Empower citizens to make informed decisions.</li>\n          <li>Don't single out individual donors; don't facilitate punitive actions.</li>\n          <li>Design visualizations so they can be consumed by anyone.</li>\n        </ul>\n      </div>\n      <div class=\"row\">\n        <h2>About the Team</h2>\n        <p>The team is group of volunteers that strives to create positive social and political change through technology. We come from a variety of backgrounds, industries, and professions.</p>\n\n        <p>The team formed during the Code for Philly Democracy Hackathon in March 2016.</p>\n      </div>\n      <div class=\"row\">\n        <h2>Thank you</h2>\n        <p>Special thanks for support and assistance goes to:</p>\n        <ul>\n          <li><a src=\"https://codeforphilly.org/\">Code for Philly</a></li>\n        </ul>\n      </div>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
exports.AboutPageComponent = AboutPageComponent;
//# sourceMappingURL=about-page.component.js.map