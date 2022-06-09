import React, { Component } from 'react'
import './style.css'

export default class Panigation extends Component {
    render() {
        return (
            <div>
                <button className='btn-panigation'>{'<'}</button>
                <button className='btn-panigation red'>1</button>
                <button className='btn-panigation'>2</button>
                <button className='btn-panigation'>3</button>
                <button className='btn-panigation'>{'>'}</button>
            </div>
        )
    }
}
