import React, { Component } from 'react';
import classNames from 'classnames';

import { Badge } from 'antd';

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
      <div className={classNames("shopping-cart__details", { "is-hidden": isProductListHidden})}>
        <ul className="shopping-cart__list">
          {productList.map(product => <ShoppingCartItem key={product.id} {...product} />)}
        </ul>
      </div>
    );
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
          <div className="shopping-cart__quantity">
            <Badge count={quantity} />
          </div>
        </figure>
        {this.renderProductList()}
      </div>
    );
  }
}

export default ShoppingCart;
