export const deleteProductFromBasket = async (productId) =>
	fetch(`http://localhost:3005/basket/${productId}`, {
		method: 'DELETE',
	});
