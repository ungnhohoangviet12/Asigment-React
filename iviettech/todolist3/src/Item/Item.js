import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { content, handleDelete, taskName, complete } = this.props
        return (
            <div>
                <div className='item'>
                    <p style={{
                        color: taskName.complete ? 'green' : 'red',
                        maxWidth: '300px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                    }}>{content}</p>
                    {!taskName.complete && <button onClick={() => complete(taskName.id)}>V</button>}
                    <button onClick={() => handleDelete(taskName.id)}>X</button>
                </div>
                <hr />
            </div>
        )
    }
}
