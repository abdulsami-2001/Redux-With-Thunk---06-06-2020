import {ActionTypes} from '../Action Types/ActionTypes'

const initialState = {
    data:{},
    loading: false, //true when get_post_start
    error: null    
}

export const postReducer = (state=initialState, action) => {

    switch(action.type){

        case ActionTypes.GET_POST_START:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                loading:false,
                data: action.payload,
                error: null
            }
        case ActionTypes.GET_POST_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload,
                data: {}
            }

        default:
            return {
                ...state
            }
    }
}