import { transformPizza } from '../transformers';

export const getPizza = async (idToFind) =>
	fetch(`http://localhost:3005/pizzas?id=${idToFind}`)
		.then((loadedPizza) => loadedPizza.json())
		.then(([loadedPizza]) => loadedPizza && transformPizza(loadedPizza));
