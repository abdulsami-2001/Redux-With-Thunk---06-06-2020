import {createStore,applyMiddleware} from 'redux'
import {AllReducers} from './Reducers/AllReducers'
import thunk from 'redux-thunk'


export const store = createStore(AllReducers, applyMiddleware(thunk)) 