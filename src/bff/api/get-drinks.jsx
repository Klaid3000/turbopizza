import { transformDrink } from '../transformers';

export const getDrinks = (searchPhrase) =>
	fetch(`http://localhost:3005/drinks?title_like=${searchPhrase}`)
		.then((loadedDrinks) => loadedDrinks.json())
		.then((loadedDrinks) => loadedDrinks && loadedDrinks.map(transformDrink));
