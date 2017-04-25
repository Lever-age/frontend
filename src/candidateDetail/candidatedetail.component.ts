import { Component } from '@angular/core';

@Component({
  selector: 'leverage-candidate-detail',
  template: `
  <div class="container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div class="img-container">
          <img src="http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg" alt="{{candidateName}}"
            class="candidate-img img-responsive" />
        </div>
      </div>
      <div class="col-md-10 page-header">
        <h1>{{candidateName}} ({{candidateParty}})</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <h2>{{candidatePosition}}</h2>
        <p>{{electionYear}} {{electionCycle}}</p>
        <div class="heat-map">
          <p>Heat Map Goes Here</p>
        </div>
      </div>
    </div>
  </div>
</div>`
})

export class CandidateDetailComponent {
  candidateName: string = 'Francine Yurchik';
  candidateImage: string = 'http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg';
  candidateParty: string = 'D';
  candidatePosition: string = 'City Council';
  electionYear: number = 2017;
  electionCycle: string = 'Primary';
}
