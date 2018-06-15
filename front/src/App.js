import React, { Component } from 'react'
import FullPage from './FullPage'
import './App.css'
import Carousel from './Carousel'

class App extends Component {
  state = {index: 0}
  onClickLink = i => this.setState({index: i})
  render () {
    return (
      <div>
        <FullPage onClickLink={this.onClickLink} />
        <Carousel index={this.state.index} />
      </div>
    )
  }
}



export default App
