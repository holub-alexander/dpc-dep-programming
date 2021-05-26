import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from './styles/GlobalStyles';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > footer {
    margin-top: auto;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
