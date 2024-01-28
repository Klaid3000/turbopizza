import { transformGift } from '../transformers';

export const getGift = async (idToFind) =>
	fetch(`http://localhost:3005/gifts?id=${idToFind}`)
		.then((loadedGift) => loadedGift.json())
		.then(([loadedGift]) => loadedGift && transformGift(loadedGift));
