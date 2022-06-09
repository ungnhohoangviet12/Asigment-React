import React, { Component } from 'react'
import './style.css';

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    onclickProduct = () => {
        alert(this.props.children)
    }

    render() {
        const { name, image, price, giamgia } = this.props;
        return (
            <div className='item'>
                <div className='box'>
                    <img src={image} alt={this.props.children} width='100'></img>
                </div>
                <p className='name'>{name}</p>
                <p className='price'>{price}</p>
                <div><span>{giamgia}</span></div>
                <h3>{this.props.children}</h3>
                <button onClick={this.onclickProduct} className='button-item'>mua hàng</button>
            </div>
        )
    }
}
