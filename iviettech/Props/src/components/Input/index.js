import React, { Component } from 'react'
import './style.css'


export default class Input extends Component {
    constructor() {
        super()
        this.handleInut = this.handleInut.bind();
        this.state = {
        };
    }
    handleInut(e) {
        console.log(e.target.value)

    }
    render() {
        return (
            <input onChange={this.handleInut} className='input-header' placeholder='Add new task in here'></input>
        )
    }
}
