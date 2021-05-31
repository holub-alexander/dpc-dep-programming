import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <Heading>
      <Container>
        <HeadingWrapper>
          <nav>
            <NavList />
          </nav>
          <HeaderSocial />
        </HeadingWrapper>
      </Container>
    </Heading>
  );
};

const Heading = styled.header`
  background-color: var(--light-x);
  color: var(--dark-xl);
  border-bottom: 1px solid #e8e8e8;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 7;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

export default Header;
