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
var CandidateListComponent = (function () {
    function CandidateListComponent() {
        this.campaignObject = {
            campaignId: 1,
            candidateId: 1,
            candidateName: 'string',
            candidateParty: 'string',
            candidatePosition: 'string',
            electionCycle: 'string',
            electionYear: 1,
            campaignSummary: [
                {
                    campaignId: 1,
                    summaryLevel: 'string',
                    summaryType: 'string',
                    summaryValue: 1
                }
            ]
        };
    }
    CandidateListComponent = __decorate([
        core_1.Component({
            selector: 'leverage-candidate-list',
            template: "\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"bs-example\" data-example-id=\"panel-without-body-with-table\"> \n            <div class=\"panel panel-default\"> \n                <div class=\"list-group\">\n                    <button type=\"button\" routerLink=\"/candidatedetail\" class=\"list-group-item button-list-item\">\n                        <span class=\"pull-left\">Francine Yurchik (D)</span><span class=\"pull-right\">District Attorney</span>\n                    </button>\n                    <button type=\"button\" routerLink=\"/candidatedetail\" class=\"list-group-item button-list-item\">\n                        <span class=\"pull-left\">Francine Yurchik (D)</span><span class=\"pull-right\">District Attorney</span>\n                    </button>\n                    <button type=\"button\" routerLink=\"/candidatedetail\" class=\"list-group-item button-list-item\">\n                        <span class=\"pull-left\">Francine Yurchik (D)</span><span class=\"pull-right\">District Attorney</span>\n                    </button>\n                    <button type=\"button\" routerLink=\"/candidatedetail\" class=\"list-group-item button-list-item\">\n                        <span class=\"pull-left\">Francine Yurchik (D)</span><span class=\"pull-right\">District Attorney</span>\n                    </button>\n                    <button type=\"button\" routerLink=\"/candidatedetail\" class=\"list-group-item button-list-item\">\n                        <span class=\"pull-left\">Francine Yurchik (D)</span><span class=\"pull-right\">District Attorney</span>\n                    </button>\n                </div>\n        </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateListComponent);
    return CandidateListComponent;
}());
exports.CandidateListComponent = CandidateListComponent;
//# sourceMappingURL=candidatelist.component.js.map