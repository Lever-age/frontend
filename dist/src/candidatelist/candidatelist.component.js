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
var candidate_list_service_1 = require('./service/candidate-list.service');
var CandidateListComponent = (function () {
    function CandidateListComponent(candidateListService) {
        this.candidateListService = candidateListService;
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
    CandidateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidateListService
            .getCampagins()
            .subscribe(function (data) {
            console.log('Data', data);
            _this.campaigns = data;
        });
    };
    CandidateListComponent = __decorate([
        core_1.Component({
            selector: 'leverage-candidate-list',
            template: "\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"bs-example\" data-example-id=\"panel-without-body-with-table\"> \n            <div class=\"panel panel-default\"> \n                <div class=\"list-group\">\n                    <button *ngFor=\"let campaign of campaigns; let i = index\" type=\"button\" routerLink=\"/candidatedetail\" class=\"list-group-item button-list-item\">\n                        <span class=\"pull-left\">{{ campaigns[i].candidate_name }}</span><span class=\"pull-right\">{{ campaigns[i].candidate_position }}</span>\n                    </button>\n                </div>\n        </div>\n    </div>",
            providers: [candidate_list_service_1.CandidateListService]
        }), 
        __metadata('design:paramtypes', [candidate_list_service_1.CandidateListService])
    ], CandidateListComponent);
    return CandidateListComponent;
}());
exports.CandidateListComponent = CandidateListComponent;
//# sourceMappingURL=candidatelist.component.js.map