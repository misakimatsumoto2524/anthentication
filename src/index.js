import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Login />
      </div>
    ) 
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))