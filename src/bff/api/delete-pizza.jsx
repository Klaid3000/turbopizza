export const deletePizza = (pizzaId) =>
	fetch(`http://localhost:3005/pizzas/${pizzaId}`, {
		method: 'DELETE',
	});
