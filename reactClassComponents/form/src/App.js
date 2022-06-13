import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onhandleChange = this.onhandleChange.bind(this)
    this.onhandleSubmit = this.onhandleSubmit.bind(this)
    this.state = {
      username: '',
      password: '',
      textarea: '',
      select: 1,
      lananh: ''
    }
  }

  onhandleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  onhandleChange(e) {
    var target = e.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.onhandleSubmit}>
          <div className="mb-3">
            <label className="form-label">Điền thông tin</label>
            <input onChange={this.onhandleChange}
              type="text"
              className="form-control"
              name='username'
              id="name"
              placeholder='điền gì cũng được'
              value={this.state.username}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={this.onhandleChange}
              type="password"
              className="form-control"
              name='password'
              id="password"
              placeholder='điền gì cũng được'
              value={this.state.password}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả:</label>
            <textarea
              onChange={this.onhandleChange}
              className="form-control"
              name="textarea"
              id=""
              value={this.state.textarea}
              rows="3" ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Giới tính:</label>
            <select onChange={this.onhandleChange}
              className="form-control"
              name="select" id=""
              value={this.state.select}>
              <option value={0} >Nam</option>
              <option value={1} >Nữ</option>
            </select>
          </div>
          <h3>ngôn ngữ</h3>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="lananh" id="" value="en" />
            <label className="form-check-label" >
              Tiếng Anh
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="lananh" id="" value="ja" />
            <label className="form-check-label" >
              Tiếng Nhật
            </label>
          </div>
          <button type="submit" className="btn btn-primary">lưu lại</button>
          <button type="reset" className="btn btn-primary">Xóa Trắng</button>
        </form>
      </div>
    )
  }
}
