import React, { Component } from 'react'
import { Context } from './Hello'

export default class Layout2 extends Component {
    render() {
        return (
            <div>

                {this.context.title}
                <button
                    onClick={this.context.handleClick}
                >Submit</button>
            </div>
        )
    }
}

Layout2.contextType = Context