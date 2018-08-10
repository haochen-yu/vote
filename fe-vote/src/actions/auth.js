import * as types from './types';

export const authenticate = () => ({
    type: types.AUTHENTICATED_TRUE
});

export const unauthenticate = () => ({
	type: types.AUTHENTICATED_FALSE
});