export const transformDrink = (dbDrink) => ({
	id: dbDrink.id,
	title: dbDrink.title,
	imgUrl: dbDrink.image_url,
	price: dbDrink.price,
});
