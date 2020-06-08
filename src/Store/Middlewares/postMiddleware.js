import {getPostFailure,getPostSuccess,getPostStart} from '../Actions/postAction'

 
export const getPostMiddleware = () => {

    return async dispatch => {

        try {
            
            dispatch(getPostStart())
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1') 
            
            const data = await response.json()

            dispatch(getPostSuccess(data))
            
        } catch (error) {
            
            dispatch(getPostFailure(error))

        }

    }

}