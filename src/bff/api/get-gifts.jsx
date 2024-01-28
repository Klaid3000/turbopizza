import { transformGift } from '../transformers';

export const getGifts = (searchPhrase) =>
	fetch(`http://localhost:3005/gifts?title_like=${searchPhrase}`)
		.then((loadedGifts) => loadedGifts.json())
		.then((loadedGifts) => loadedGifts && loadedGifts.map(transformGift));
