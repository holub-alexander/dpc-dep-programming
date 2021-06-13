import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import HeaderSocial from './HeaderSocial';
import { FiMenu } from 'react-icons/fi';
import ScrollLock from 'react-scrolllock';

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
    console.log('click');
  };

  return (
    <Heading>
      <Container>
        <HeadingWrapper>
          <BurgerButton onClick={toggleMenu} />
          <ScrollLock isActive={menuState}>
            <Navigation className={menuState ? 'active' : ''}>
              <NavList />
            </Navigation>
          </ScrollLock>
          <HeaderSocial />
          <Overlay onClick={toggleMenu} className={menuState ? 'active' : ''} />
        </HeadingWrapper>
      </Container>
    </Heading>
  );
};

const Heading = styled.header`
  background-color: var(--bg-dark);
  color: var(--dark-xl);
  border-bottom: 1px solid #d2d2d2;
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

const Navigation = styled.nav`
  overflow-y: auto;

  @media screen and (max-width: 992px) {
    font-size: 14px;

    span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    height: 100%;
    width: 230px;
    transform: translateX(-100%);
    opacity: 0;
    z-index: 8;
    transition: transform 0.24s ease-in, opacity 0.28s ease-in;

    ul {
      display: initial;
    }

    a {
      width: 100%;
    }

    &.active {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BurgerButton = styled(FiMenu)`
  display: inline-block;
  font-size: 23px;
  height: 42px;
  width: 42px;
  padding: 10px;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 7;
  opacity: 0;
  pointer-events: none;
  transition: all 500ms;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default Header;
