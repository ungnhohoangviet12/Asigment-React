import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import List from './Item/List'
import Footer from './Footer/Footer'
import { listTask, defauAddtask, LIMIT_TASK_IN_PAGE } from './conants/commom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.getTaskInCurrentPage = this.getTaskInCurrentPage.bind(this)
    this.handlesetpage = this.handlesetpage.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.state = {
      listTask: listTask,
      inputName: '',
      currentPage: 1
    }
  }

  handleInputChange(e) {
    this.setState({
      inputName: e.target.value
    })
  }

  addTask() {

    const newTask = {
      ...defauAddtask,
      id: new Date().getTime(),
      taskName: this.state.inputName
    }




    this.setState(prev => {
      return {
        ...prev,
        listTask: [newTask, ...prev.listTask],
      }

    })


  }
  handleDelete(id) {
    const deleteTask = [...this.state.listTask];
    const finddelete = deleteTask.findIndex(task => task.id === id)

    if (finddelete !== -1) {
      deleteTask.splice(finddelete, 1)
      this.setState({
        listTask: [...deleteTask],
      })
    }
  }

  handleComplete(id) {
    const listTask = [...this.state.listTask]
    const finddelete = listTask.findIndex(task => task.id === id)

    if (finddelete !== -1) {
      const newcomplete = {
        ...listTask[finddelete],
        complete: true
      }
      listTask.splice(finddelete, 1, newcomplete)
      this.setState({
        listTask: listTask
      })
    }

  }



  getTaskInCurrentPage() {
    const startIndex = this.state.currentPage * LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE;
    return [...this.state.listTask.slice(startIndex, startIndex + LIMIT_TASK_IN_PAGE)]
  }


  handlesetpage(page) {
    this.setState({
      currentPage: page
    })
    console.log('hoangviet');

  }

  render() {
    return (
      <div className='App'>
        <Header addTask={this.addTask} onChange={this.handleInputChange} />
        <div className='secction'>
          <List complete={this.handleComplete} handlegetPage={this.getTaskInCurrentPage()} handleDelete={this.handleDelete} />
        </div>
        <Footer handlesetpage={this.handlesetpage} taskName={this.state.listTask} limit={LIMIT_TASK_IN_PAGE} currentPage={this.state.currentPage} />
      </div>
    )
  }
}

