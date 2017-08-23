// counter.ts
import { Action } from '@ngrx/store';
import { CouncilListActions } from './../common/enum';
import { CampaignsSlice } from '../store.interface';
import { CampaignInfo } from './../models/common/campaign.model';

export function campaignSlice(state: CampaignsSlice, action: Action) {
	if (state === void 0) {
		state = {
			campaigns: <CampaignInfo>{}
		};
	}

	switch (action.type) {
		case CouncilListActions[CouncilListActions.SAVE_CHOSEN_CAMPAIGN]:
			// state = {
			// 	campaigns: action.payload
			// }
			return Object.assign({},
				state,{
					campaigns: Object.assign(
						{},
						action.payload
					)
				}
				);
			// return state;
		default:
			return state;
	}
}