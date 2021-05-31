import React from 'react';
import styled from 'styled-components';
import { BiBuildingHouse } from 'react-icons/bi';
import HeroSlider from './HeroSlider';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = ({ sliderImg }) => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { page: { eq: "index" } }) {
        frontmatter {
          mainDescr
          mainTitle
        }
      }
    }
  `);

  return (
    <HeroContainer>
      <Container>
        <Logo>
          <BiBuildingHouse />
        </Logo>
        <HeroSlider sliderImg={sliderImg} />
        <HeroInfo>
          <HeroTitle>
            {data.markdownRemark.frontmatter.mainTitle || ''}
            <span>{data.markdownRemark.frontmatter.mainDescr || ''}</span>
          </HeroTitle>
        </HeroInfo>
      </Container>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding-top: 105px;
  margin-bottom: 65px;
  position: relative;
  background-color: #fff;
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
  color: var(--dark-xl);
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
  letter-spacing: 2.5px;

  span {
    font-size: 30px;
    font-weight: 500;
    display: block;
    margin-top: 17px;
    letter-spacing: 1.5px;
  }
`;

export default Hero;
