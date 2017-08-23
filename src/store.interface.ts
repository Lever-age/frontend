import { CampaignInfo } from './models/common/campaign.model';

export interface CampaignsSlice {
    campaigns: CampaignInfo;
}

export interface LeverageAppStore {
    campaignSlice: CampaignsSlice;
}