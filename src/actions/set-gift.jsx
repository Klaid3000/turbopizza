import { ACTION_TYPE } from './action-type.jsx';

export const setGift = (giftData) => ({
	type: ACTION_TYPE.SET_GIFT,
	payload: giftData,
});
