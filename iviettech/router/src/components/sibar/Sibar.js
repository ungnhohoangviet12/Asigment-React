import React, { useState } from 'react'
import Button from '../Button'
import './item.css'
import List from './List';

export default function Sibar() {
    const [order, setOrder] = useState(true);

    const handleClick = () => {
        setOrder(!order)
        console.log(order)
    }

    return (
        <div className='sibar'>
            <Button onClick={handleClick} />
            {order && <List />}
        </div>
    )
}
