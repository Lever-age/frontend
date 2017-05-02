"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var leverage_constants_1 = require("./../../constants/common/leverage.constants");
// other import {  } from 'module';
var CommonProxy = (function () {
    function CommonProxy(leverageConstants) {
        this.leverageConstants = leverageConstants;
        this.mockData = true;
    }
    CommonProxy.prototype.getCommonDataStream = function (r) {
        if (this.mockData === true) {
            return this.getMockData(r);
        }
    };
    CommonProxy.prototype.getMockData = function (r) {
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
            };
        }
    };
    return CommonProxy;
}());
CommonProxy = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [leverage_constants_1.LeverageConstants])
], CommonProxy);
exports.CommonProxy = CommonProxy;
//# sourceMappingURL=common.proxy.js.map