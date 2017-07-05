import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CampaignInfo } from '../../models/common/campaign.model';

const LEVERAGE_API: string = 'http://api.leveragecampaignfinance.org';

@Injectable()
export class LeverageApiProxy {
    constructor(private http: Http) {}

    getCampagins(): Observable<CampaignInfo[]> {
        return this.http.get(LEVERAGE_API + '/candidates')
          .map((response: Response) => response.json());
    }
}
