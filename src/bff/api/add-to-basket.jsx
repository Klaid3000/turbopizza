export const addProductToBasket = (title, size, price) =>
	fetch('http://localhost:3005/basket', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ title, size, price }),
	});
