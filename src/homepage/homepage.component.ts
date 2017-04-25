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
  <div class="jumbotron">
        <div class="container">
        <div class="row">
          <h1 class="text-center home-header">Hello, world!</h1>
        </div>
        <div class="row">
          <p class="text-center">Empower citizens of Philadelphia to use campaign finance data when making informed decisions about who they donate to, who they support, and who they vote for.</p>
        </div>
        <div class="row home-buttons">
          <div class="col-md-6 text-center">
            <button type="button" routerLink="/candidatelist" class="btn btn-default btn-lg">District Attorney</button>
          </div>
          <div class="col-md-6 text-center">
            <button type="button" routerLink="/candidatelist" class="btn btn-default btn-lg">City Controller</button>
          </div>
        </div>
      </div>
    </div>
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
