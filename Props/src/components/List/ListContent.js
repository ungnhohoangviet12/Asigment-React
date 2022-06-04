import React, { Component } from 'react'

export default class ListContent extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const { content } = this.props
        return (
            <p style={{ textAlign: 'center' }}>{content}</p>
        )
    }
}
