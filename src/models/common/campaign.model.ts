export interface Campaign {
    candidateId: number;
    candidateName: string;
    campaigns: Campaigns[];
}

export interface Campaigns {
    campaignId: number;
    candidateId: number;
    candidateName: string;
    candidateParty: string;
    candidatePosition: string;
    electionCycle: string;
    electionYear: number;
    campaignSummary: CampaignSummary[];
}

export interface CampaignSummary {
    campaignId: number;
    summaryLevel: string;
    summaryType: string;
    summaryValue: number;
}