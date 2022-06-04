import React, { Component } from 'react'
import ButtonSpecial from '../Button/ButtonSpecial'
import Divider from '../Divider'
import ListContent from './ListContent'
import './style.css'

export default class ListItem extends Component {
    render() {
        return (
            <div className='list-item'>
                <div className='item'>
                    <ListContent content='This is first task!' />
                    <ButtonSpecial />
                </div>
                <Divider />
            </div>
        )
    }
}
