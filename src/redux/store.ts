import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer} from "./slices";
import {authReducer} from "./slices/auth.slice";

const rootReducer = combineReducers({
    charactersReducer,
    authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export {
    setupStore
};
