import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart';
import Menu from './components/Menu';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { quantity: 0, saludar: '' };
    }

    tick = () => {
      this.setState({ quantity: this.state.quantity + 1 })
    }

    componentDidMount() {
      window.setInterval(this.tick, 1000);
    }

    render() {
      const { quantity } = this.state;

      return (
        <Menu>
          <ShoppingCart quantity={quantity} />
        </Menu>
      );
    }
}

export default App;
