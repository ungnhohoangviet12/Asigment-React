import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      fonSize: 20
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params,
      fontSize: 20
    })

  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <SizeSetting />
        </div>
        <Reset />
        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    )
  }
}
