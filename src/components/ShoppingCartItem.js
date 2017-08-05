import React from 'react';
import './ShoppingCartItem.css';

const ShoppingCartItem = ({ title, image, price, quantity}) => (
  <li className="shopping-cart-item">
    <figure className="shopping-cart-item__figure">
      <img className="shopping-cart-item__image" alt={title} src={image} />
    </figure>
    <strong className="shopping-cart-item__title">{title}</strong>
    <span className="shopping-cart-item__quantity">{quantity}</span>
    <span className="shopping-cart-item__price">{price}</span>
  </li>
);

export default ShoppingCartItem;
