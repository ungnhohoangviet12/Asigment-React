import './App.css';
import Header from './components/Header';
import ButtonPluss from './components/Button/ButtonPlus';
import Input from './components/Input';
import Divider from './components/Divider';
import List from './components/List';
import Panigation from './components/Panigation';
import { defaultValueTask, initialTasks } from './constants';


import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      listTasks: initialTasks,
      taskInput: ''
    }
    this.handleChangeInputTask = this.handleChangeInputTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleChangeInputTask(e) {
    this.setState({
      taskInput: e.target.value
    })
  }

  // them taks

  handleAddTask() {
    if (!this.state.taskInput.trim()) return

    const newTask = {
      ...defaultValueTask,
      id: new Date().getTime(),
      taskName: this.state.taskInput
    }
    this.setState(prev => {
      return {
        ...prev,
        listTasks: [newTask, ...prev.listTasks],
        taskInput: ''
      }
    })

  }

  // xoa task
  handleDelete(id) {
    console.log('hoang viets')

    const listTasks = [...this.state.listTasks]
    const indexDelete = listTasks.findIndex(task => (task.id === id))

    if (indexDelete !== -1) {
      listTasks.splice(indexDelete, 1)
      this.setState({
        listTasks: [...listTasks]
      })
    }
  }



  // xoa tich


  handleComplete(id) {
    console.log('hoang viets')

    const listTasks = [...this.state.listTasks]
    const indexUpdate = listTasks.findIndex(task => (task.id === id))

    if (indexUpdate !== -1) {

      const taskReplace = {
        ...listTasks[indexUpdate],
        isCompleted: true
      }

      listTasks.splice(indexUpdate, 1, taskReplace)
      this.setState({
        listTasks: [...listTasks]
      })
    }
  }



  render() {
    return (
      <div className="App">
        <Header title={'TO DO LIST APPLICATION'} />
        <div className='add-task-wrapper'>
          <Input value={this.state.taskInput} handleChangeInputTask={this.handleChangeInputTask}
          />
          <ButtonPluss onClick={this.handleAddTask} />
        </div>
        <Divider fullWidth />
        <List handleComplete={this.handleComplete} handleDelete={this.handleDelete} taskLists={this.state.listTasks} />
        <Divider fullWidth />
        <Panigation />
      </div>
    );
  }
}