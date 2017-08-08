import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart';
import Menu from './components/Menu';
import { Button } from 'antd';

const productList = [
  {
    id: 1,
    title: "Neil deGrasse Tyson's Newest STEM campaign",
    image:
      'https://d2v48i7nl75u94.cloudfront.net/uploads/f1dc399219683de51f22d9dfa7e11801.jpg',
    quantity: 1,
    price: 50000
  },
  {
    id: 2,
    title: "Neil deGrasse Tyson's Oldest STEM campaign",
    image:
      'https://d2v48i7nl75u94.cloudfront.net/uploads/f1dc399219683de51f22d9dfa7e11801.jpg',
    quantity: 2,
    price: 100000
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }

  updateShoppintCart = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  render() {
    const { quantity } = this.state;

    return (
      <Menu>
        <Button type="primary" onClick={this.updateShoppintCart}>Primary</Button>
        <ShoppingCart quantity={quantity} productList={productList} />
      </Menu>
    );
  }
}

export default App;
