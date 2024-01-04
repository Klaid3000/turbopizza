import { ACTION_TYPE } from './action-type.jsx';

export const setUser = (user) => ({
	type: ACTION_TYPE.SET_USER,
	payload: user,
});
