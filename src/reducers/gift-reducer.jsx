import { ACTION_TYPE } from '../actions';

const initialGiftState = {
	id: null,
	title: null,
	price: null,
};

export const giftReducer = (state = initialGiftState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_GIFT:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
