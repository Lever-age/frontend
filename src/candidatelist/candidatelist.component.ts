import { Component, OnInit } from '@angular/core';
import { Campaign, Campaigns } from './../models/common/campaign.model';

import { CandidateListService } from './service/candidate-list.service';

@Component({
  selector: 'leverage-candidate-list',
  template: `
    <div class="container">
        <div class="row">
        <div class="bs-example" data-example-id="panel-without-body-with-table"> 
            <div class="panel panel-default"> 
                <div class="list-group">
                    <button *ngFor="let campaign of campaigns; let i = index" type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">{{ campaigns[i].candidate_name }}</span><span class="pull-right">{{ campaigns[i].candidate_position }}</span>
                    </button>
                </div>
        </div>
    </div>`,
    providers: [CandidateListService]
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
    constructor(private candidateListService: CandidateListService) {}
    ngOnInit() {
        this.candidateListService
        .getCampagins()
        .subscribe((data: Campaigns[]) => {
            console.log('Data', data);
            this.campaigns = data;
        });
    }

}
