import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from './Store/Actions/counterActions'
import {getPostMiddleware} from './Store/Middlewares/postMiddleware'

const App = (props) => {


  console.log(props)
  console.log(props.post.error)
  console.log(props.post.data.title)

  return (

    <div>
      
      <div>
        <h2>Counter:{props.counter.value}</h2>
        <button onClick={()=>{props.increment()}}>Increment</button>
        <button onClick={()=>{props.decrement()}} >Decrement</button>
      </div>

      <hr/>

      <div>

        <h2>POSTS</h2>

        {props.post.loading ? <p>Loading...</p> : <p>Enjoy Result!</p>}


        {props.post.error === null ? (<p>{props.post.data.title}</p>) : (<p>{props.post.error.message}</p>)}


        <br/>

        <button onClick={()=>{props.getPost()}} disabled={props.post.loading ? true : false} >GET POST</button>

      </div>

    </div>
    
  )
}

const mapStateToProps = (state) =>({
  
  counter:state.counter,
  post: state.post


})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  getPost: () => dispatch(getPostMiddleware())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
