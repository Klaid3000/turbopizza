export const transformPizza = (dbPizza) => ({
	id: dbPizza.id,
	title: dbPizza.title,
	imgUrl: dbPizza.image_url,
	ingredients: dbPizza.ingredients,
	price: dbPizza.price,
});
