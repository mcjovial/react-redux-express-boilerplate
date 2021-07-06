import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Projects from './components/Project/Projects'
import Testimonial from './components/Project/Testimonial'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">React/Redux Express Boilerplate</h1>
          </header>
          <Projects/>
          <hr/>
          <Testimonial/>
        </div>
      </Provider>
    )
  }
}

export default App
