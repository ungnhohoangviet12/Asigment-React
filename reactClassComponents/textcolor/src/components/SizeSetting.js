import React, { Component } from 'react'
import '../App.css'
export default class SizeSetting extends Component {
    render() {
        return (
            <div className='colorBox none'>
                <span>font-size: 15px</span><br />
                <button>Giảm</button>
                <button>Tăng</button>
            </div>
        )
    }
}
