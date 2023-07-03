import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {bestChoiceReducer} from "../components/MainPage/BestChoice/best.choice.reducer";

const rootReducer = combineReducers({
    bestChoice: bestChoiceReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;