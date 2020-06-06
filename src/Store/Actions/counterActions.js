import {ActionTypes} from '../Action Types/ActionTypes'

export const increment = () =>{
    return{
        type:ActionTypes.INCREMENT
    }
}


export const decrement = () =>{
    return{
        type:ActionTypes.DECREMENT
    }
}
