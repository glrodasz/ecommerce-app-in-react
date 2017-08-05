import React, { Component } from 'react';
import shoppingCartImg from '../images/shopping-cart.png';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    const { quantity } = this.props;

    return (
      <div className="shopping-cart">
        <figure className="shopping-cart__icon">
          <img
            alt="Shopping Cart"
            className="shopping-cart__image"
            src={shoppingCartImg}
          />
        </figure>
        <div className="shopping-cart__list" />
      </div>
    );
  }
}

export default ShoppingCart;
