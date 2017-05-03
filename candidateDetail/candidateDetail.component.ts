import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'leverage-candidate-detail',
  templateUrl: './candidateDetail.html'
})

export class CandidateDetailComponent  {
  candidateName: string = 'Francine Yurchik';
  candidateImage: string = 'http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg';
  candidateParty: string = 'D';
  candidatePosition: string = 'City Council';
  electionYear: number = 2017;
  electionCycle: string = 'Primary';
}
