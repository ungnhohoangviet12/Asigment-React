import React from 'react'
import './item.css'

export default function Item(props) {
    return (
        <div className='item'>
            <span>{props.title}</span>
        </div>
    )
}
