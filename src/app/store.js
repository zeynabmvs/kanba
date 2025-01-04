import {combineReducers, configureStore} from "@reduxjs/toolkit";
import boardsReducer from "src/features/boards/boardsSlice.js";
import modalReducer from "src/features/modalSlice";
import appSettingsReducer from "src/features/appSettingsSlice";
import colorModeReducer from "src/features/colorModeSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const rootReducer = combineReducers({
	boards: boardsReducer,
	modal: modalReducer,
	colorMode: colorModeReducer,
	appSettings: appSettingsReducer
});


const persistConfig = {
	key: 'kanbaAppState',
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
