import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChange, todoAdd } from '../reudx/action'
import { todosRemainingSelector } from '../reudx/selector';
import Item from './Item';


export default function Header() {
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState();
    const dispath = useDispatch();
    const lists = useSelector(todosRemainingSelector)
    // const searchSelector = useSelector(searchTextSelector)
    // console.log(searchSelector);


    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = () => {
        dispath(todoAdd({
            id: 1,
            title: title,
            status: false
        }))
        setTitle('');
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        dispath(searchFilterChange(e.target.value))
    }
    return (
        <div>
            <div>
                <input value={search} type="text" placeholder='search' onChange={handleChangeSearch} />
                <button>Search</button>
            </div>

            {lists.map((list, index) => {
                return <Item key={index} id={list.id} title={list.title} />
            })}
            <div>
                <input value={title} type="text" placeholder='hay nhap gi do di' onChange={handleTitle} />
                <button onClick={handleSubmit}>ADD</button>
            </div>
        </div>
    )
}
