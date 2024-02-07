export const getBasket = async () =>
	fetch(`http://localhost:3005/basket`).then((loadedBasket) => loadedBasket.json());
