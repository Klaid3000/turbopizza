import { transformDrink } from '../transformers';

export const getDrink = async (idToFind) =>
	fetch(`http://localhost:3005/drinks?id=${idToFind}`)
		.then((loadedDrink) => loadedDrink.json())
		.then(([loadedDrink]) => loadedDrink && transformDrink(loadedDrink));
