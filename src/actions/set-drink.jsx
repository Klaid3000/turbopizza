import { ACTION_TYPE } from './action-type.jsx';

export const setDrink = (drinkData) => ({
	type: ACTION_TYPE.SET_DRINK,
	payload: drinkData,
});
