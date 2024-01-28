import { getDrinks } from '../api';

export const fetchDrinks = async (searchPhrase) => {
	const drinks = await getDrinks(searchPhrase);

	return {
		error: null,
		res: drinks,
	};
};
