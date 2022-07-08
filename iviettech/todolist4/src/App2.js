import React, { Component } from 'react'
import CounterTime from './components/CounterTime'

export default class App2 extends Component {
    constructor() {
        super()
        this.state = {
            isCounterShow: true
        }
        this.handleHideCounter = this.handleHideCounter.bind(this)
    }


    handleHideCounter() {
        this.setState(prev => {
            return {
                isCounterShow: !prev.isCounterShow
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isCounterShow && <CounterTime />}
                <button onClick={this.handleHideCounter}>{this.state.isCounterShow ? 'Hide Counter' : 'Show Counter'}</button>
            </div>
        )
    }
}
