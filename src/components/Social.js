import React from 'react';
import styled from 'styled-components';
import vkIcon from '../assets/images/icons/vk.svg';
import { FaTelegramPlane } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      markdownRemark(frontmatter: { page: { eq: "index" } }) {
        frontmatter {
          vkLink
          telegramLink
        }
      }
    }
  `);

  return (
    <SocialList>
      <li>
        <SocialLink
          href={data.markdownRemark.frontmatter.vkLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={vkIcon} style={{ width: '17px', height: '17px' }} />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href={data.markdownRemark.frontmatter.telegramLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTelegramPlane />
        </SocialLink>
      </li>
    </SocialList>
  );
};

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li:last-child a {
    margin-right: 0;
  }
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 30px;
  height: 30px;
  border: 2px solid #e8e8e8;
  margin-right: 10px;
  transition: 0.2s ease-in;

  :hover,
  :focus {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

export default Social;
