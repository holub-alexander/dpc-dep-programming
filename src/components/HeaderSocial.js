import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const HeaderSocial = () => {
  return (
    <SocialBox>
      <span>Соцсети:</span>
      <Social />
    </SocialBox>
  );
};

const SocialBox = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    font-size: 14px;
    margin-right: 10px;
  }
`;

export default HeaderSocial;
