import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        const { handlesetpage, taskName, limit, currentPage } = this.props
        const end = taskName.length / limit
        return (
            <div className='footer'>
                <hr />
                {currentPage !== 1 && <button onClick={() => handlesetpage(currentPage - 1)}>{'<'}</button>}
                {currentPage - 1 > 0 && <button onClick={() => handlesetpage(currentPage - 1)}>{currentPage - 1}</button>}
                <button style={{ color: 'red' }}>{currentPage}</button>
                {currentPage < end && <button onClick={() => handlesetpage(currentPage + 1)}>{currentPage + 1}</button>}
                {currentPage < end && <button onClick={() => handlesetpage(currentPage + 1)}>{'>'}</button>}
                {console.log(currentPage, end)}
            </div>

        )
    }
}
