import { transformPizza } from '../transformers';

export const getPizza = async (titleToFind) =>
	fetch(`http://localhost:3005/pizzas?title=${titleToFind}`)
		.then((loadedPizza) => loadedPizza.json())
		.then(([loadedPizza]) => loadedPizza && transformPizza(loadedPizza));
