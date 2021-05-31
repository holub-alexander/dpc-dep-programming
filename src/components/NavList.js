import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AiFillHome } from 'react-icons/ai';
import { ImNewspaper } from 'react-icons/im';
import { MdEventAvailable } from 'react-icons/md';
import { RiGalleryFill } from 'react-icons/ri';
import { FiFileText } from 'react-icons/fi';

const NavList = () => {
  return (
    <NavListBox>
      <li>
        <NavLink to={'/'}>
          <NavLinkIcon>
            <AiFillHome />
          </NavLinkIcon>
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink to={'/news'}>
          <NavLinkIcon>
            <ImNewspaper />
          </NavLinkIcon>
          Новости
        </NavLink>
      </li>
      <li>
        <NavLink to={'/events'}>
          <NavLinkIcon>
            <MdEventAvailable />
          </NavLinkIcon>
          События
        </NavLink>
      </li>
      <li>
        <NavLink to={'/gallery'}>
          <NavLinkIcon>
            <RiGalleryFill />
          </NavLinkIcon>
          Галерея
        </NavLink>
      </li>
      <li>
        <NavLink to={'/docs'}>
          <NavLinkIcon>
            <FiFileText />
          </NavLinkIcon>
          Документы
        </NavLink>
      </li>
    </NavListBox>
  );
};

const NavListBox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavLink = styled(Link)`
  display: inline-block;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  padding: 30px 20px;
  transition: 0.2s ease-in;

  :hover,
  :focus {
    color: var(--accent);
  }
`;

const NavLinkIcon = styled.span`
  margin-right: 7px;
  font-size: 15px;
`;

export default NavList;
