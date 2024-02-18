import { ACTION_TYPE } from '../actions';

const initialPizzaState = {
	id: '',
	title: '',
	imageUrl: '',
	ingredients: '',
	price: '',
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
