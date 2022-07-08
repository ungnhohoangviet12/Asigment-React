import React from 'react'
import Item from './Item'

export default function List() {
    return (
        <div className='list'>
            <Item title={'Home'} />
            <Item title={'About'} />
            <Item title={'Order'} />
            <Item title={'He'} />
            <Item title={'Kata'} />
        </div>
    )
}


