import React, { Component } from 'react'
import FullPage from './FullPage'
import './App.css'
import Carousel from './Carousel'


class App extends Component {
  render () {
    return (
      <div>
        <FullPage />
        <Carousel />
      </div>
    )
  }
}

export default App
