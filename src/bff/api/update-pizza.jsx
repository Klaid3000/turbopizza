export const updatePizza = ({ id, title, imageUrl, ingredients, price }) =>
	fetch(`http://localhost:3005/pizzas/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			image_url: imageUrl,
			ingredients,
			price,
		}),
	}).then((loadedPizza) => loadedPizza.json());
