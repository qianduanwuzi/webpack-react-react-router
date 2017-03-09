import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
// import clientMiddleware from '../middleware/clientMiddleware';
// import loggerMiddleware from '../middleware/loggerMiddleware';

// import reducers from './index';

export default (initialState) => {
	const middlewares = [
		thunk,
		// clientMiddleware,
		// loggerMiddleware
	];

	return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
}

