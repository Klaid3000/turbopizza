import { getPizzas } from '../api';

export const fetchPizzas = async (searchPhrase) => {
	const pizzas = await getPizzas(searchPhrase);

	return {
		error: null,
		res: pizzas,
	};
};
