import { ACTION_TYPE } from '../actions';

const initialPizzaState = {
	id: null,
	title: null,
	ingredients: null,
	price: null,
};

export const pizzaReducer = (state = initialPizzaState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PIZZA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
