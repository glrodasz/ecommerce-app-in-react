import React from 'react';
import Head from 'next/head';
import Navbar from '../../common/components/Navbar';
import globalStyles from '../../../utils/globalStyles';

const Layout = ({ children, title = 'E-commerce in React' }) =>
  <div className="layout">
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.6/antd.min.css"
      />
      <style global>
        {globalStyles}
      </style>
    </Head>
    <header>
      <Navbar />
    </header>
    <div className="layout-container">
      {children}
    </div>
    <footer>
      {'I`m here to stay'}
    </footer>
    <style jsx>{`
      .layout-container {
        padding-top: 60px;
      }
    `}</style>
  </div>;

export default Layout;
