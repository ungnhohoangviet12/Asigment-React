import React, { Component } from 'react'
import ButtonSpecial from '../Button/ButtonSpecial'
import Divider from '../Divider'
import ListContent from './ListContent'
import './style.css'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { contentItem } = this.props
        return (
            <div>
                <h3>{contentItem}</h3>
                <div className='content-item'>
                    <ListContent content={'đây là item nha các bạn'} />
                    <ButtonSpecial />
                </div>
                <Divider />
            </div>
        )
    }
}
