import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.state = {
            checkbox: false,
        };
    }

    handleOnchange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }


    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleOnchange}
                        type="checkbox"
                        name="checkbox"
                        value={true}
                        checked={this.state.checkbox === true}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
