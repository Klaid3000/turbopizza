import { generateDate } from './utils';

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application',
		},
		body: JSON.stringify({
			login,
			password,
			regiter_at: generateDate(),
			role_id: 2,
		}),
	});
