import { setPizza } from './set-pizza';

export const savePizzaAsync = (requestServer, newPizzaData) => (dispatch) =>
	requestServer('savePizza', newPizzaData).then((updatedPizza) => {
		dispatch(setPizza(updatedPizza.res));

		return updatedPizza.res;
	});
