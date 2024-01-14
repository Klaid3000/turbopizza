export const transformGift = (dbGift) => ({
	id: dbGift.id,
	title: dbGift.title,
	imgUrl: dbGift.image_url,
	price: dbGift.price,
});
