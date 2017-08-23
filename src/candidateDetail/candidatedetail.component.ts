import { Component, OnInit } from '@angular/core';
import { CampaignInfo } from './../models/common/campaign.model';
import { CandidateListService } from '../candidatelist/services/candidatelist.service';
import { Store, Action } from '@ngrx/store';
import { LeverageAppStore } from '../store.interface';

@Component({
  selector: 'leverage-candidate-detail',
  template: `
  <div class="container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div class="img-container">
          <img src="http://www.publicdomainpictures.net/pictures/190000/velka/young-business-woman-1470305665A9g.jpg"
          class="candidate-img img-responsive" />
        </div>
      </div>
      <div class="col-md-10 page-header">  
        <h1>{{ campaign[0].campaign.candidate_name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <h2>{{ campaign[0].campaign.campaigns[0].candidate_position}}</h2>
        <p>{{ campaign[0].campaign.campaigns[0].election_year}} {{ campaign[0].campaign.campaigns[0].election_cycle}}</p>
        <div class="heat-map">
          <p>Heat Map Goes Here</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
providers: [CandidateListService]
})

export class CandidateDetailComponent implements OnInit  {
  campaign: CampaignInfo[] = [];
  s: string;
  variable: string;
  constructor(private candidateListService: CandidateListService, private store: Store<LeverageAppStore>) {

  }

  ngOnInit() {
    this.store.select(slice => slice.campaignSlice).subscribe(val => {
      if (val) {
        // this.variable = JSON.parse(val.campaigns.candidate_name);
        this.campaign.push(val.campaigns);
      }
    });
  }

}
