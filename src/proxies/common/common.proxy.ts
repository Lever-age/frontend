import { Injectable } from '@angular/core';
import { DataRequest, DevParameters } from './../../models/common/common.model';
import { LeverageConstants } from './../../constants/common/leverage.constants';
import { Campaign } from './../../models/common/campaign.model';
// other import {  } from 'module';

@Injectable()
export class CommonProxy {
    mockData: boolean = true;

    constructor(private leverageConstants: LeverageConstants) {}

    public getCommonDataStream(r: DataRequest): Campaign {
        if (this.mockData === true) {
            return this.getMockData(r);
        }
    }

    private getMockData(r: DataRequest): Campaign {
        if (r) {
            return {
                "candidateId": 1,
                "candidateName": "Matt Wolfe",
                "campaigns": [
                    {
                        "campaignId": 1,
                        "candidateId": 1,
                        "candidateName": "Matt Wolfe",
                        "candidateParty": "Suprise Party",
                        "candidatePosition": "Council-At-Large",
                        "electionCycle": "General Election",
                        "electionYear": 3000,
                        "campaignSummary": [
                            {
                                "campaignId": 1,
                                "summaryLevel": "10",
                                "summaryType": "donation_histogram",
                                "summaryValue": 6
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "20",
                                "summaryType": "donation_histogram",
                                "summaryValue": 5
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "30",
                                "summaryType": "donation_histogram",
                                "summaryValue": 4
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "40",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "50",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "60",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "80",
                                "summaryType": "donation_histogram",
                                "summaryValue": 6
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "100",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "130",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "150",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "170",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "200",
                                "summaryType": "donation_histogram",
                                "summaryValue": 3
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "250",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "270",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "490",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "500",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "590",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "600",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "920",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "1000",
                                "summaryType": "donation_histogram",
                                "summaryValue": 2
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "2000",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "3070",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "8000",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "10000",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            },
                            {
                                "campaignId": 1,
                                "summaryLevel": "15000",
                                "summaryType": "donation_histogram",
                                "summaryValue": 1
                            }
                        ],
                    }
                ]
            }
        }
    }
}
