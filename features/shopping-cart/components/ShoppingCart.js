import React, { Component } from 'react';
import classNames from 'classnames';

import { Badge } from 'antd';

import ShoppingCartListItem from './ShoppingCartListItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { isProductListHidden: true };
  }

  toggleProductList = () => {
    const { isProductListHidden } = this.state;

    this.setState({ isProductListHidden: !isProductListHidden });
  };

  renderProductList() {
    const { productList } = this.props;
    const { isProductListHidden } = this.state;

    return (
      <div
        className={classNames('shopping-cart__details', {
          'is-hidden': isProductListHidden
        })}
      >
        <ul className="shopping-cart__list">
          {productList.map(product =>
            <ShoppingCartListItem key={product.id} {...product} />
          )}
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
            src={
              Number(quantity) >= 1
                ? '/static/images/shopping-cart-full.png'
                : '/static/images/shopping-cart.png'
            }
          />
          <div className="shopping-cart__quantity">
            <Badge count={quantity} />
          </div>
        </figure>
        {this.renderProductList()}
        <style jsx>{`
          .shopping-cart {
            display: inline-block;
            position: relative;
          }

          .shopping-cart__icon {
            max-width: 35px;
            margin: 0;
            position: relative;
            cursor: pointer;
          }

          .shopping-cart__quantity {
            position: absolute;
            top: -4px;
            right: -8px;
          }

          .shopping-cart__image {
            width: 100%;
          }

          .shopping-cart__details {
            background: white;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
            padding: 20px;
          }

          .shopping-cart__list {
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default ShoppingCart;
