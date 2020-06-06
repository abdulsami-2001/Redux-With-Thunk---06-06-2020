import {ActionTypes} from '../Action Types/ActionTypes'

const initialState = {
    value: 0
}

export const countReducer = (state = initialState, action) => {

    switch(action.type){
        case ActionTypes.INCREMENT:
            return {
                ...state,
                value: state.value+1
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                value: state.value-1
            }
        default : 
            return{
                ...state
            }

    }

}