import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keywork: ''
        }
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }

    onSearch = () => {
        this.props.onSearch(this.state.keywork)
    }

    render() {
        var { keywork } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input name='keywork' value={keywork} onChange={this.onChange} type="text" className="form-control" placeholder="Nhập từ khóa..." />
                    <span className="input-group-btn">
                        <button onClick={this.onSearch} className="btn btn-primary" type="button">
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}
