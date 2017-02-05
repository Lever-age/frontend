import { Injectable } from '@angular/core';
import { CommonProxy  } from './../../proxies/common/common.proxy';
import { DataRequest } from './../../models/common/common.model';

@Injectable()
export class CommonService {
    constructor(private commonProxy: CommonProxy) { }

    public getCampaignDataStream(r: DataRequest) {
        return this.commonProxy.getCommonDataStream(r);
    }   

    private commonMethod(s: string): string {
        let str: string = s;
        return str;
    }
}