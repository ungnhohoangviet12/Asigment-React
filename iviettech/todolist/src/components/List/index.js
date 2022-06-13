import React, { Component } from 'react'
import ListItem from './ListItem';
export default class List extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }


    render() {
        const { taskLists, handleDelete, handleComplete } = this.props

        return (
            <div className='list-wrapper'>
                {taskLists.map(taskItem => (< ListItem handleComplete={handleComplete} handleDelete={handleDelete} key={taskItem.id} task={taskItem} />))}

            </div>
        )
    }
}

