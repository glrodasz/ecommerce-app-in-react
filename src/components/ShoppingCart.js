import React, { Component } from 'react';

import ShoppingCartItem from './ShoppingCartItem';

import shoppingCartImg from '../images/shopping-cart.png';
import shoppingCartImgFull from '../images/shopping-cart-full.png';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { isProductListHidden: true };
  }

  toggleProductList = () => {
    const { isProductListHidden } = this.state;

    this.setState({ isProductListHidden: !isProductListHidden })
  }

  renderProductList() {
    const { productList } = this.props;
    const { isProductListHidden } = this.state;

    return (
      <ul className={`shopping-cart__list ${isProductListHidden ? 'is-hidden' : ''}`}>
        {productList.map(product => <ShoppingCartItem key={product.id} {...product} />)}
      </ul>
    );
  }

  renderQuantity() {
    const { quantity } = this.props;

    if (Number(quantity) >= 1) {
      return (
        <div className="shopping-cart__quantity">
          {Number(quantity) >= 99 ? <span>&infin;</span> : quantity}
        </div>
      );
    }
  }

  render() {
    const { quantity } = this.props;

    return (
      <div className="shopping-cart" onClick={this.toggleProductList}>
        <figure className="shopping-cart__icon">
          <img
            alt="Shopping Cart"
            className="shopping-cart__image"
            src={Number(quantity) >= 1 ? shoppingCartImgFull : shoppingCartImg}
          />
          {this.renderQuantity()}
        </figure>
        {this.renderProductList()}
      </div>
    );
  }
}

export default ShoppingCart;
