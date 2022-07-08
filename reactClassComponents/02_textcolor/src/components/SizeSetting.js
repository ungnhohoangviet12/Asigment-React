import React, { Component } from 'react'
import '../App.css'
export default class SizeSetting extends Component {
    changeSize(value) {
        this.props.onChangeSize(value)
    }
    render() {
        return (
            <div className='colorBox none'>
                <span>Size : {this.props.fontSize}px</span><br />
                <button onClick={() => this.changeSize(-2)}>Giảm</button>
                <button onClick={() => this.changeSize(2)}>Tăng</button>
            </div>
        )
    }
}
