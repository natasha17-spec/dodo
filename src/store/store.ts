import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
import {mainReducer} from "./redusers/mainReducer";

const rootReducer = combineReducers({
    main: mainReducer,
})
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


const middleware = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, middleware);
