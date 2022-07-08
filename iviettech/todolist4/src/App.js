import React, { Component } from 'react'
import Content from './components/Content'
import CounterTime from './components/CounterTime'
import Layout1 from './components/Layout1'
import { CommonContext } from './contexts'

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      helloWorld: 'hello world'
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeText() {
    this.setState({
      helloWorld: 'hello ' + Math.random(20)
    })
  }

  handleSubmit() {
    this.setState({
      helloWorld: 'xin chao' + 10
    })
  }


  render() {
    return (
      <CommonContext.Provider value={{ ...this.state, handleChangeText: this.handleChangeText, handleSubmit: this.handleSubmit }}>
        <div>
          <Layout1 />
          <Content />
          <CounterTime />
        </div>
      </CommonContext.Provider>
    )
  }
}
