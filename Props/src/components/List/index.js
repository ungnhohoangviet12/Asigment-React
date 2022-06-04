import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    render() {
        return (
            <div className='list'>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        )
    }
}
