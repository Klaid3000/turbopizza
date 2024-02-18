import { deletePizza } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removePizza = async (hash, pizzaId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	deletePizza(pizzaId);

	return {
		error: null,
		res: true,
	};
};
