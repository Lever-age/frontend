import { Component } from '@angular/core';
import { Campaign, Campaigns } from './../models/common/campaign.model';

@Component({
  selector: 'leverage-candidate-list',
  template: `
    <div class="container">
        <div class="row">
        <div class="bs-example" data-example-id="panel-without-body-with-table"> 
            <div class="panel panel-default"> 
                <div class="list-group">
                    <button type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">Francine Yurchik (D)</span><span class="pull-right">District Attorney</span>
                    </button>
                    <button type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">Francine Yurchik (D)</span><span class="pull-right">District Attorney</span>
                    </button>
                    <button type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">Francine Yurchik (D)</span><span class="pull-right">District Attorney</span>
                    </button>
                    <button type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">Francine Yurchik (D)</span><span class="pull-right">District Attorney</span>
                    </button>
                    <button type="button" routerLink="/candidatedetail" class="list-group-item button-list-item">
                        <span class="pull-left">Francine Yurchik (D)</span><span class="pull-right">District Attorney</span>
                    </button>
                </div>
        </div>
    </div>`
})

export class CandidateListComponent  {
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

}
