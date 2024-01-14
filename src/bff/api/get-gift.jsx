import { transformGift } from '../transformers';

export const getGift = async (titleToFind) =>
	fetch(`http://localhost:3005/gifts?title=${titleToFind}`)
		.then((loadedGift) => loadedGift.json())
		.then(([loadedGift]) => loadedGift && transformGift(loadedGift));
