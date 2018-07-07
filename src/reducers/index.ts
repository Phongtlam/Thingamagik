import { combineReducers } from 'redux';

export const appReducer = combineReducers({
	// reducers go here
});

export const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		state = undefined;
	}

	return appReducer(state, action);
};
