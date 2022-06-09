import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    render() {
        return (
            <div className='list-item'>
                <ListItem contentItem={'viet dep trai so 1'} />
                <ListItem contentItem={'viet dep trai so 2'} />
                <ListItem contentItem={'viet dep trai so 3'} />
                <ListItem contentItem={'viet dep trai so 4'} />
                <ListItem contentItem={'viet dep trai so 5'} />
            </div>
        )
    }
}
