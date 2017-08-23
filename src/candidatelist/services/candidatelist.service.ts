import { Injectable } from '@angular/core';
import { DataRequest } from './../../models/common/common.model';
import { LeverageApiProxy } from '../../proxies/common/leverage-api.proxy';
import { CampaignInfo } from '../../models/common/campaign.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CandidateListService {
    selectedCampaign: Subject<CampaignInfo> = new Subject<CampaignInfo>();
    campaign = this.selectedCampaign.asObservable();
    constructor(private leverageApiProxy: LeverageApiProxy) { }

    public getCandidateDataStream(): Observable<CampaignInfo[]> {
        return this.leverageApiProxy.getCampagins();
    }

    sendSelectedCampaignObject(campaign: CampaignInfo) {
        this.selectedCampaign.next(campaign);
    }
}