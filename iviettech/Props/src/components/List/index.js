import React, { Component } from 'react'
import ListItem from './ListItem';
export default class List extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }


    render() {
        const { listTasks } = this.props

        return (
            <div className='list'>
                {listTasks.map(taskItem => (< ListItem key={taskItem.id} taskItem={taskItem} />))}

            </div>
        )
    }
}

