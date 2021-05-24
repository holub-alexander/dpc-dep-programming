import * as React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
