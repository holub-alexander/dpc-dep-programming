import React from 'react';
import styled from 'styled-components';
import { FaTelegramPlane } from 'react-icons/fa';

const Social = () => {
  return (
    <SocialBox>
      <span>Соцсети:</span>
      <SocialList>
        <li>
          <SocialLink
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegramPlane />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href='https://vk.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegramPlane />
          </SocialLink>
        </li>
      </SocialList>
    </SocialBox>
  );
};

const SocialBox = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
  }
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 30px;
  height: 30px;
  border: 2px solid #e8e8e8;
  margin-left: 10px;
  transition: 0.2s ease-in;

  :hover,
  :focus {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

export default Social;
