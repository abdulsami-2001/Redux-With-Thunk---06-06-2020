import {ActionTypes} from '../Action Types/ActionTypes'

export const getPostStart = () => {
    return{
        type: ActionTypes.GET_POST_START
    }
}

export const getPostSuccess = (data) => {
    return{
        type: ActionTypes.GET_POST_SUCCESS,
        payload: data
    }
}

export const getPostFailure = (err) => {
    return{
        type: ActionTypes.GET_POST_FAILURE,
        payload: err
    }
}