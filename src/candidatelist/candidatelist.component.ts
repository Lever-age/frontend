import { Component, OnInit } from '@angular/core';
import { Campaigns } from './../models/common/campaign.model';

import { LeverageApiProxy } from '../proxies/common/leverage-api.proxy';

@Component({
  selector: 'leverage-candidate-list',
  template: `
    <div class="container">
        <div class="row">
        <div class="bs-example" data-example-id="panel-without-body-with-table"> 
            <div class="panel panel-default"> 
                <div class="list-group">
                    <button *ngFor="let campaign of campaigns; let i = index" type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">{{ campaigns[i].candidate_name }}</span><span class="pull-right">{{ campaigns[i].campaigns[0].candidate_position }}</span>
                    </button>
                </div>
        </div>
    </div>`,
    providers: [LeverageApiProxy]
})

export class CandidateListComponent implements OnInit  {
    campaignList: Campaigns[];
    campaignObject: Campaigns = {
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
    campaigns: Campaigns[];
    constructor(private leverageApiProxy: LeverageApiProxy) {}
    ngOnInit() {
        this.leverageApiProxy
        .getCampagins()
        .subscribe((data: Campaigns[]) => this.campaigns = data);
    }

}
