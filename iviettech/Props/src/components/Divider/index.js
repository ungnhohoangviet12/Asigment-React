import React, { Component } from 'react'

export default class Divider extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { fullWidth } = this.props
        return (
            <hr style={{ backgroundColor: 'black', color: 'black', height: '2px', width: fullWidth ? '100%' : '90%' }} ></hr>
        )
    }
}
