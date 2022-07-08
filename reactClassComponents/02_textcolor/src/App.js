import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onChangeSize = this.onChangeSize.bind(this)
    this.onReset = this.onReset.bind(this)
    this.state = {
      color: 'red',
      fontSize: 20
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params,

    })

  }

  onChangeSize(value) {
    this.setState({
      fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
    });
  }


  onReset() {
    this.setState({
      color: 'red',
      fontSize: 12
    })
  }
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
        </div>
        <Reset onSettingon={this.onReset} />
        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    )
  }
}
