import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart';
import Menu from './components/Menu';

class App extends Component {
    render() {
      return (
        <Menu>
          <ShoppingCart quantity='5' />
        </Menu>
      );
    }
}

export default App;
