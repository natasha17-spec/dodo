import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
import {mainReducer} from "./redusers/mainReducer";

const rootReducer = combineReducers({
    main: mainReducer,
})
type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>


// type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
// export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>
const middleware = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, middleware);
