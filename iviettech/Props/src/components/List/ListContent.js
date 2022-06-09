import React, { Component } from 'react'
import './style.css'

export default class ListContent extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const { content, id } = this.props
        return (
            <p className='title-item' style={{ textAlign: 'center' }}><span className='theid'>{id}</span>{content}</p>
        )
    }
}
