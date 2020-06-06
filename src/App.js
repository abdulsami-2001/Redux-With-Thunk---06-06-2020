import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from './Store/Actions/counterActions'

const App = (props) => {


  console.log(props)

  return (

    <div>

      <h2>Counter:{props.value}</h2>

      <button onClick={()=>{props.increment()}}>Increment</button>
      <button onClick={()=>{props.decrement()}} >Decrement</button>

    </div>
    
  )
}

const mapStateToProps = (state) =>(state.counter)

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
