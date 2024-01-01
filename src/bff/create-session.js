import { removePizza } from './session';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removePizza = removePizza;
			break;
		}
		case ROLE.VISITOR: {
			break;
		}
		case ROLE.GUEST: {
			break;
		}
		default: //ничего не делать
	}

	return session;
};
