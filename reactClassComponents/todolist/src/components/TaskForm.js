import React, { Component } from "react";
import "../App.css";
export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: false
        };
    }
    componentDidMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        } else if (!nextProps.task) {
            this.setState({
                id: "",
                name: "",
                status: false
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state);
        this.onCloseForm()
        this.onClear()
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    };

    onClear = () => {
        this.setState({
            name: "",
            status: false
        })
    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}</h3>

                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onCloseForm}
                    ></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" name="name" onChange={this.onChange} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required" name="status" onChange={this.onChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                {id !== '' ? 'Lưu lại' : 'Thêm'}
                            </button>
                            &nbsp;
                            <button type="reset" onClick={this.onClear} className="btn btn-danger">
                                Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
