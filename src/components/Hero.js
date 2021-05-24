import React from 'react';
import styled from 'styled-components';
import { BiBuildingHouse } from 'react-icons/bi';
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <Logo>
          <BiBuildingHouse />
        </Logo>
        <HeroSlider />
        <HeroInfo>
          <HeroTitle>
            Донецкий политехнический колледж
            <span>отделение программирования</span>
          </HeroTitle>
        </HeroInfo>
      </Container>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding-top: 105px;
  position: relative;
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  font-size: 102px;
  background-color: #fff;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

const HeroInfo = styled.div`
  max-width: 915px;
  width: 100%;
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 55px;
  font-weight: 700;
  color: var(--light-xl);
  text-align: center;
  line-height: 1.1;

  span {
    font-size: 30px;
    font-weight: 500;
    display: block;
    margin-top: 17px;
  }
`;

export default Hero;
