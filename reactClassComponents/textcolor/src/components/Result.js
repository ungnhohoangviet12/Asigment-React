import React, { Component } from 'react'
import '../App.css'
export default class Result extends Component {

    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <div>
                <div>
                    <p>Color:red-Fontsize: 15px</p>
                    <input style={this.setStyle()} placeholder='Nội dụng setting' />
                </div>
            </div>
        )
    }
}
