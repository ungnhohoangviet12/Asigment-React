import React, { Component } from 'react'
import Header from './components/Header'
import { Comomt } from './context/Context'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'hello world'
    }
    this.handleOnchange = this.handleOnchange.bind(this)
  }

  handleOnchange() {
    this.setState({
      title: 'hello' + Math.random(1000)
    })
  }
  render() {
    return (
      <Comomt.Provider value={{ ...this.state, handleOnchagne: this.handleOnchange }}>
        <div>

          <Header />
        </div>
      </Comomt.Provider>
    )
  }
}
