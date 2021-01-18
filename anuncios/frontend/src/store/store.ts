import { configureStore } from '@reduxjs/toolkit';
import clockReducer from './slices/clockSlice';
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';
import settingReducer from './slices/settingSlice';
import categoryReducer from './slices/categorySlice';
import purchasesReducer from './slices/purchasesSlice';
import articleReducer from './slices/articleSlice';
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";

export const makeStore: MakeStore = (_: Context) =>
    configureStore({
        reducer: {
            counter: counterReducer,
            clock: clockReducer,
            auth: authReducer,
            setting: settingReducer,
            category: categoryReducer,
            purchases: purchasesReducer,
            article: articleReducer,
        },
        devTools: true,
        // middleware: getDefaultMiddleware().prepend(logger)
    });

export const wrapper = createWrapper(makeStore, {debug: false});