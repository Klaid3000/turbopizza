import { transformDrink } from '../transformers';

export const getDrink = async (titleToFind) =>
	fetch(`http://localhost:3005/drinks?title=${titleToFind}`)
		.then((loadedDrink) => loadedDrink.json())
		.then(([loadedDrink]) => loadedDrink && transformDrink(loadedDrink));
