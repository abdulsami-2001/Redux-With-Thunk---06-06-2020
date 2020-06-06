import {combineReducers} from 'redux'
import {countReducer} from '../Reducers/counterReducer'

export const AllReducers = combineReducers({
    counter: countReducer
})