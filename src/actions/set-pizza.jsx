import { ACTION_TYPE } from './action-type.jsx';

export const setPizza = (pizzaData) => ({
	type: ACTION_TYPE.SET_PIZZA,
	payload: pizzaData,
});
