import { getGifts } from '../api';

export const fetchGifts = async (searchPhrase) => {
	const gifts = await getGifts(searchPhrase);

	return {
		error: null,
		res: gifts,
	};
};
