import React, { Component } from 'react'
import './style.css'

export default class ButtonPlus extends Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        return (
            <button className='btn btn--pluss' onClick={this.props.onClick}>+</button>
        )
    }
}
