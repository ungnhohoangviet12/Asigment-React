import React from 'react'

export default function Newtask() {
    return (
        <div className='newtask'>
            <div className='title'>
                <label>Title</label>
                <input type="text" placeholder='Task 1' />
            </div>
            <div className='title'>
                <label>Loc</label>
                <input type="text" placeholder='Loc' />
            </div>
            <div className='title'>
                <label>Created at</label>
                <input type="text" placeholder='25-06-2022 19:04:04' />
            </div>
            <div className='title'>
                <label>Description</label>
                <input type="text" placeholder='This is a Task. This is a Task' />
            </div>
            <div className='title'>
                <label>New</label>
                <input type="radio" />
            </div>
            <div className='title'>
                <label>Doing</label>
                <input type="radio" />
            </div>
            <div className='title'>
                <label>Done</label>
                <input type="radio" />
            </div>
        </div>
    )
}
