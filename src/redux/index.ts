import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { wordAPI } from './wordService';

const rootReducer = combineReducers({ [wordAPI.reducerPath]: wordAPI.reducer });

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wordAPI.middleware),
});
