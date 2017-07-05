import { Component, OnInit } from '@angular/core';
import { CampaignInfo } from './../models/common/campaign.model';

import { Store, Action } from '@ngrx/store';
import { CouncilListActions } from './../common/enum';

import { LeverageAppStore } from '../store.interface';

import { CandidateListService } from '../candidatelist/services/candidatelist.service';
import { LeverageConstants } from './../constants/common/leverage.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'leverage-mayor-list',
  template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                {{mayor}}
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <div class="container">
        <div class="row">
        <div class="bs-example" data-example-id="panel-without-body-with-table"> 
            <div class="panel panel-default"> 
                <div class="list-group">
                    <button *ngFor="let campaign of campaignLists let i = index" type="button" 
                    (click)="navigateToDetails(campaign)" class="list-group-item button-list-item">
                        <div class="circle"></div>
                        <span class="candidateName pull-left">{{ campaign.candidate_name }}</span><span class="pull-right">{{ campaign.campaigns[0].candidate_position }}</span>
                    </button>
                </div>
        </div>
    </div>`,
    providers: [CandidateListService, LeverageConstants]
})

export class MayorListComponent implements OnInit  {
    
    campaignLists: CampaignInfo[] = [];
    private mayor: string;
    constructor(private candidateListService: CandidateListService,
    private leverageConstants: LeverageConstants,
    private router: Router,
    private store: Store<LeverageAppStore>) {}

    ngOnInit() {
        this.mayor = this.leverageConstants.MAYOR;
        this.candidateListService.getCandidateDataStream()
            .subscribe(campaignsResponse => {
                campaignsResponse.forEach(campaign => {
                    if (campaign.campaigns[0].candidate_position === this.leverageConstants.MAYOR) {
                        this.campaignLists.push(campaign);
                    }
                    
                });
            });
    }

    navigateToDetails(event: CampaignInfo) {
        this.dispatchChosenCampaign(event);
        this.router.navigateByUrl('/candidatedetail');
    }

    dispatchChosenCampaign(chosenCampaign: CampaignInfo) {
        let action: Action = {
            type: CouncilListActions[CouncilListActions.SAVE_CHOSEN_CAMPAIGN],
            payload: {
                campaign: chosenCampaign
            }
        };
        this.store.dispatch(action);
    }

}
