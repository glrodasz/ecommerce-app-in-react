import React from 'react';
import Logo from './Logo';
import ShoppingCart from '../../shopping-cart/components/ShoppingCart';
import { Menu } from 'antd';

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

const Navbar = () =>
  <div className="navbar">
    <div className="navbar__logo">
      <Logo />
    </div>
    <div className="navbar__items">
      <Menu
        onClick={() => {}}
        selectedKeys="mail"
        mode="horizontal"
      >
        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          Navigation Two
        </Menu.Item>
        <Menu.SubMenu title={<span>Navigation Three - Submenu</span>}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
      <ShoppingCart quantity="10" productList={productList} />
    </div>
    <style jsx>{`
        .navbar {
          display: flex;
          background: white;
          width: 100%;
          position: fixed;
          height: 60px;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .navbar__items {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
    `}</style>
  </div>;

export default Navbar;
