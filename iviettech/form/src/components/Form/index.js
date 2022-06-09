import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            firstname: '',
            passowrd: ''
        }
        this.hanldeSubmit = this.hanldeSubmit.bind(this)
        this.handleOnchange = this.handleOnchange.bind(this)
    }

    handleOnchange(e) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }


    hanldeSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.hanldeSubmit}>
                    <input onChange={this.handleOnchange} name='username' placeholder='username' />
                    <input onChange={this.handleOnchange} name='firstname' placeholder='firstname' />
                    <input type={'password'} onChange={this.handleOnchange} name='passowrd' placeholder='passowrd' />
                    <button type='submit'>Đăng nhập</button>
                </form>
            </div>
        )
    }
}
