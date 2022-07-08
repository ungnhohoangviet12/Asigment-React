import React, { Component } from 'react'
import '../App.css'
export default class ColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: ['red', 'green', 'blue', 'black']
        }
    }

    showColor(color) {
        return {
            backgroundColor: color
        }
    }
    setActiveColor(color) {
        this.props.onReceiveColor(color)
    }
    render() {

        var elmColors = this.state.colors.map((color, index) => {
            return <span onClick={() => this.setActiveColor(color)} className='boxColor' style={this.showColor(color)} key={index}></span>
        })

        return (
            <div className='colorBox'>
                <div className='panel'>color Picker</div>
                <div className='panel-body'>
                    {elmColors}
                </div>
            </div>
        )
    }
}
