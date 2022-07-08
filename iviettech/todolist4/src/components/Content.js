import React, { Component } from 'react'
import { Context } from './Hello'
import Layout2 from './Layout2'
export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            title: 'hay nhan de nhan thuong'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            title: Math.random(30)
        })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, handleClick: this.handleClick }}>
                <div><Layout2 /></div>
            </Context.Provider>
        )
    }
}
