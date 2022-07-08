import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { onChange, addTask } = this.props
        return (
            <div className='header'>
                <h1 className='title'>TO DO LIST APPLICATION</h1>
                <div className='content-input'>
                    <input onChange={onChange} placeholder='Add new task in here' />
                    <button onClick={addTask}>+</button>
                    <hr />
                </div>
            </div>
        )
    }
}
