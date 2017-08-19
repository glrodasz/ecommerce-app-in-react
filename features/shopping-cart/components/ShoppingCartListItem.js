import React from 'react';

const ShoppingCartListItem = ({ title, image, price, quantity }) =>
  <li className="shopping-cart-item">
    <figure className="shopping-cart-item__figure">
      <img className="shopping-cart-item__image" alt={title} src={image} />
    </figure>
    <strong className="shopping-cart-item__title">
      {title}
    </strong>
    <div className="shopping-cart-item__detail">
      <strong>Cantidad</strong>
      <p>
        {quantity}
      </p>
    </div>
    <span className="shopping-cart-item__detail">
      <strong>Precio</strong>
      <p>
        {price}
      </p>
    </span>
    <style jsx>{`
      .shopping-cart-item {
        display: flex;
        flex-wrap: wrap;
      }

      .shopping-cart-item__title {
        width: calc(100% - 50px);
      }

      .shopping-cart-item__figure {
        width: 50px;
        margin: 0;
      }

      .shopping-cart-item__image {
        width: 100%;
      }

      .shopping-cart-item__detail {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </li>;

export default ShoppingCartListItem;
