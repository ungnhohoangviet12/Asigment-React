import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { title } = this.props

        return (
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
        )
    }
}
