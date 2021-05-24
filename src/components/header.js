import * as React from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import Social from './Social';

const Header = () => {
  return (
    <Heading>
      <Container>
        <HeadingWrapper>
          <nav>
            <NavList />
          </nav>
          <Social />
        </HeadingWrapper>
      </Container>
    </Heading>
  );
};

const Heading = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
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
