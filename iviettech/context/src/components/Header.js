import React, { Component } from 'react'
import { Comomt } from '../context/Context'

export default class Header extends Component {
    render() {
        console.log(this.context);
        return (
            <div>
                {this.context.title}
                <button onClick={this.context.handleOnchagne}>submit</button>
            </div>
        )
    }
}

Header.contextType = Comomt