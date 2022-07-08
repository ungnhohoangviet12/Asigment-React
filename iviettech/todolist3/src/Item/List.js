import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { handleDelete, handlegetPage, complete } = this.props

        const elements = handlegetPage.map((task, index) => {
            return <Item taskName={task} complete={complete} handleDelete={handleDelete} key={task.id} content={task.taskName} />
        })

        return (
            <div className='list'>
                {elements}
            </div>
        )
    }
}
