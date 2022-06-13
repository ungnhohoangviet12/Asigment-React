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
        const { task, handleDelete, handleComplete } = this.props
        return (
            <div className='list-item'>
                <div className='item'>
                    <ListContent content={task.taskName} id={task.id} />
                    {
                        !task.isCompleted &&
                        <ButtonSpecial complete handleComplete={() => handleComplete(task.id)}
                        />
                    }
                    <ButtonSpecial remove handleDelete={() => handleDelete(task.id)} />

                </div>
                <Divider />
            </div>
        )
    }
}
