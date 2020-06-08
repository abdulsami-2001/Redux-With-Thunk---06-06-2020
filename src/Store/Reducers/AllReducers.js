import {combineReducers} from 'redux'
import {countReducer} from '../Reducers/counterReducer'
import {postReducer} from '../Reducers/postReducer'

export const AllReducers = combineReducers({
    counter: countReducer,
    post: postReducer
})