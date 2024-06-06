import {combineReducers, configureStore} from "@reduxjs/toolkit";
import boardsReducer from "../features/boardsSlice";
import modalReducer from "../features/modalSlice";
import themeReducer from "../features/themeSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const rootReducer = combineReducers({
	boards: boardsReducer,
	modal: modalReducer,
	theme: themeReducer,
});


const persistConfig = {
	key: 'kanbanAppState',
	storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export const persistor = persistStore(store);
