import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Campaigns } from '../../models/common/campaign.model';

const LEVERAGE_API: string = 'http://api.leveragecampaignfinance.org';

@Injectable()
export class LeverageApiProxy {
    constructor(private http: Http) {}

    getCampagins(): Observable<Campaigns[]> {
        return this.http
          .get(LEVERAGE_API + '/campaigns')
          .map((response: Response) => response.json());
    }
}
