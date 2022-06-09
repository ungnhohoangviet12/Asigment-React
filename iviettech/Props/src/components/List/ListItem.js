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
        const { taskItem } = this.props
        return (
            <div className='list-item'>
                <div className='item'>
                    <ListContent content={taskItem.taskName} id={taskItem.id} />
                    <ButtonSpecial />
                </div>
                <Divider />
            </div>
        )
    }
}
