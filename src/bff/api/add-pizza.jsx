export const addPizza = ({ imageUrl, title, ingredients, price }) =>
	fetch('http://localhost:3005/pizzas', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			image_url: imageUrl,
			ingredients,
			price,
		}),
	}).then((createPizza) => createPizza.json());
