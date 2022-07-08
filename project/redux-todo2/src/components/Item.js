import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../reudx/action';
export default function Item(props) {

    const dispath = useDispatch();

    const handleDele = (id) => {
        dispath(deleteItem({ id }))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>{props.title}</h2>
            <button onClick={() => handleDele(props.id)}>delete</button>
        </div>
    )
}
