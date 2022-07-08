import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid'

export default function Header() {
    const [title, setTitle] = useState
    const dispath = useDispatch();

    const todoList = useSelector(state => state.todoList);
    const handleClickAdd = () => {
        dispath(addTodo({
            id: uuidv4(),
            title: title,
            complete: false
        }))
        console.log(todoList);

    }

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <input value={title} onChange={handleInputChange} type="text" placeholder="nhập  gì đó đí" />
            <button onClick={handleClickAdd}>add</button>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
