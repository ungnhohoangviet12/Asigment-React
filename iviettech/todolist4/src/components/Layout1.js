import React, { Component } from 'react'
import { CommonContext } from '../contexts';

export default class Layout1 extends Component {
    render() {

        return (
            <div >
                <h1>{this.context.helloWorld}<br /></h1>
                <button
                    onClick={this.context.handleChangeText}
                >submit</button>
                <button
                    onClick={this.context.handleSubmit}
                >onChange</button>

            </div>
        )
    }
}

Layout1.contextType = CommonContext