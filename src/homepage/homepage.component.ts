import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../appfooter/leverage-footer.component';
import { HeaderComponent } from '../appheader/leverage-header.component';
import { CommonService } from './../services/common/common.services';
import { DataRequest } from './../models/common/common.model';
import { Campaigns } from './../models/common/campaign.model';
import { CommonProxy } from './../proxies/common/common.proxy';
import { LeverageConstants } from './../constants/common/leverage.constants';

@Component({
  selector: 'leverage-homepage',
  template: `
  <leverage-header></leverage-header>
  <ul>
  <li *ngFor="let campaign of campaigns">
  Candidate Name: {{ campaign.candidateName }}
  <br>
  Candidate Party: {{ campaign.candidateParty }}
  <br>
  Candidate Position: {{ campaign.candidatePosition }}
  <br>
  Election Cycle: {{ campaign.electionCycle }}
  <br>
  Election Year: {{ campaign.electionYear }}
  </li>
  </ul>
  <leverage-footer></leverage-footer>`,
  styles: [`
body {
  padding-top: 50px;
  padding-bottom: 20px;
}
`],
providers: [CommonService, CommonProxy, LeverageConstants]
})
export class HomepageComponent implements OnInit  {
    campaigns: Campaigns[];
    private homepage: string;
    private home: string;
    private finance: string;
    private about: string;
    
    constructor(private commonService: CommonService) {
        this.home = 'Home';
        this.finance = 'Finance';
        this.about = 'About';
    }
    
    ngOnInit() {
        let r: DataRequest = {request: 'data please'};
        this.campaigns = this.commonService.getCampaignDataStream(r).campaigns;
    }
}
