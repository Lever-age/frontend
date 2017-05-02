"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CandidateDetailComponent = (function () {
    function CandidateDetailComponent() {
        this.candidateName = 'Francine Yurchik';
        this.candidateImage = 'http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg';
        this.candidateParty = 'D';
        this.candidatePosition = 'City Council';
        this.electionYear = 2017;
        this.electionCycle = 'Primary';
    }
    return CandidateDetailComponent;
}());
CandidateDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'leverage-candidate-detail',
        templateUrl: './candidateDetail.html'
    })
], CandidateDetailComponent);
exports.CandidateDetailComponent = CandidateDetailComponent;
//# sourceMappingURL=candidateDetail.component.js.map