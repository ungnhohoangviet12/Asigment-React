import React, { Component } from 'react'
import './App.css'


export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: 'Iphone 12 Pro Max 512GB',
          price: '39.900.000'
        },
        {
          id: 2,
          name: 'Xiaomi Mi 8 Pro',
          price: '9.900.000'
        },
        {
          id: 3,
          name: 'Samsung Galaxy S10',
          price: '29.900.000'
        },
      ],
      status: true

    }
  }

  handleState = () => {
    console.log(this.state.products)
    this.state.products.push({
      id: 12,
      name: 'hoang viet',
      price: 212121
    }
    );
  }

  render() {

    let elements = this.state.products.map((product, index) => {
      var result = '';
      if (this.state.status === true) {
        result = <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      }
      return result;
    })


    return (
      <div className='app'>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ten</th>
              <th>Gia</th>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table>
        <button type="button" onClick={this.handleState} className="btn btn-primary">Button {this.state.status === true ? 'true' : 'false'}</button>

      </div>
    )
  }
}
