import React, { Component } from 'react'
import '../App.css'
export default class Reset extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onSettingon} className='reset'>Reset</button>
            </div>
        )
    }
}
