import { transformPizza } from '../transformers';

export const getPizzas = (searchPhrase) =>
	fetch(`http://localhost:3005/pizzas?title_like=${searchPhrase}`)
		.then((loadedPizzas) => loadedPizzas.json())
		.then((loadedPizzas) => loadedPizzas && loadedPizzas.map(transformPizza));
