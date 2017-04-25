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
var CandidateDetailComponent = (function () {
    function CandidateDetailComponent() {
        this.candidateName = 'Francine Yurchik';
        this.candidateImage = 'http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg';
        this.candidateParty = 'D';
        this.candidatePosition = 'City Council';
        this.electionYear = 2017;
        this.electionCycle = 'Primary';
    }
    CandidateDetailComponent = __decorate([
        core_1.Component({
            selector: 'leverage-candidate-detail',
            template: "\n  <div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"img-container\">\n          <img src=\"http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg\" alt=\"{{candidateName}}\"\n            class=\"candidate-img img-responsive\" />\n        </div>\n      </div>\n      <div class=\"col-md-10 page-header\">\n        <h1>{{candidateName}} ({{candidateParty}})</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-10\">\n        <h2>{{candidatePosition}}</h2>\n        <p>{{electionYear}} {{electionCycle}}</p>\n        <div class=\"heat-map\">\n          <p>Heat Map Goes Here</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateDetailComponent);
    return CandidateDetailComponent;
}());
exports.CandidateDetailComponent = CandidateDetailComponent;
//# sourceMappingURL=candidatedetail.component.js.map