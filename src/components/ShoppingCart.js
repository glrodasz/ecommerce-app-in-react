import React, { Component } from 'react';
import shoppingCartImg from '../images/shopping-cart.png';
import shoppingCartImgFull from '../images/shopping-cart-full.png';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  renderQuantity() {
    const { quantity } = this.props;

    if (quantity) {
      return (
        <div className="shopping-cart__quantity">
          {quantity}
        </div>
      );
    }
  }

  render() {
    const { quantity } = this.props;

    return (
      <div className="shopping-cart">
        <figure className="shopping-cart__icon">
          <img
            alt="Shopping Cart"
            className="shopping-cart__image"
            src={quantity >= 1 ? shoppingCartImgFull : shoppingCartImg}
          />
          {quantity >= 1 ?
            <div className="shopping-cart__quantity">
              {quantity}
            </div>: null}
        </figure>
        <div className="shopping-cart__list" />
      </div>
    );
  }
}

export default ShoppingCart;
