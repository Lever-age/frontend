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
var common_services_1 = require('./../services/common/common.services');
var common_proxy_1 = require('./../proxies/common/common.proxy');
var leverage_constants_1 = require('./../constants/common/leverage.constants');
var HomepageComponent = (function () {
    function HomepageComponent(commonService) {
        this.commonService = commonService;
        this.home = 'Home';
        this.finance = 'Finance';
        this.about = 'About';
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var r = { request: 'data please' };
        this.campaigns = this.commonService.getCampaignDataStream(r).campaigns;
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'leverage-homepage',
            template: "\n  <leverage-header></leverage-header>\n  <ul>\n  <li *ngFor=\"let campaign of campaigns\">\n  Candidate Name: {{ campaign.candidateName }}\n  <br>\n  Candidate Party: {{ campaign.candidateParty }}\n  <br>\n  Candidate Position: {{ campaign.candidatePosition }}\n  <br>\n  Election Cycle: {{ campaign.electionCycle }}\n  <br>\n  Election Year: {{ campaign.electionYear }}\n  </li>\n  </ul>\n  <leverage-footer></leverage-footer>",
            styles: ["\nbody {\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n"],
            providers: [common_services_1.CommonService, common_proxy_1.CommonProxy, leverage_constants_1.LeverageConstants]
        }), 
        __metadata('design:paramtypes', [common_services_1.CommonService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=homepage.component.js.map