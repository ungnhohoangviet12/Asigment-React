import React from 'react'
import './header.scss'

export default function Header() {
    return (
        <div className='header'>
            <button className='btn btn-header'>Create new task</button>
            <div className='search'>
                <input type="text" placeholder='Type something to search' />
                <button className='btn btn-search'>Search</button>
            </div>
        </div>
    )
}
