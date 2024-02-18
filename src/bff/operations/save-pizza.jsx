import { addPizza } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const savePizza = async (hash, newPizzaData) => {
	const accessRoles = [ROLE.ADMIN];

	const acess = await sessions.access(hash, accessRoles);

	if (!acess) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	const savedPizza = newPizzaData.id === '' ? await addPizza(newPizzaData) : null;

	return {
		error: null,
		res: savedPizza,
	};
};
