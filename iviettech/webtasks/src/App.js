import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Index';
import Panigation from './components/Panigation';
import Sidebar from './components/Sidebar/Index';
import Task from './components/Tasks/Index';
import { createNewTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from './apis/taskApi';


function App() {
  const [listTasks, setListTasks] = useState([])


  useEffect(() => {
    handleGetAllTask()
  })


  const handleGetAllTask = async () => {
    try {
      const data = await getAllTasks()
      data && setListTasks(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <div>
          <Task />
          <Panigation />
        </div>
      </div>
    </div>
  );
}

export default App;
