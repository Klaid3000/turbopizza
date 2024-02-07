import { addProductToBasket, getBasket, deleteProductFromBasket } from './api';

export const basket = {
	create(title, size, price) {
		const hash = Math.random().toFixed(50);

		addProductToBasket(hash, title, size, price);

		return hash;
	},
	async remove(hash) {
		const product = await getBasket(hash);
		if (!product) {
			return;
		}
		deleteProductFromBasket(product.id);
	},
};
