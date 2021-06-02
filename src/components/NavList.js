import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AiFillHome } from 'react-icons/ai';
import { ImNewspaper } from 'react-icons/im';
import { MdEventAvailable } from 'react-icons/md';
import { RiGalleryFill } from 'react-icons/ri';
import { FiFileText } from 'react-icons/fi';

const navLinks = [
  {
    link: '/',
    descr: 'Главная',
    icon: <AiFillHome />,
  },
  {
    link: '/news',
    descr: 'Новости',
    icon: <ImNewspaper />,
  },
  {
    link: '/events',
    descr: 'События',
    icon: <MdEventAvailable />,
  },
  {
    link: '/gallery',
    descr: 'Галерея',
    icon: <RiGalleryFill />,
  },
  {
    link: '/docs',
    descr: 'Документы',
    icon: <FiFileText />,
  },
];

const NavList = () => {
  const navListItems = navLinks.map((item, index) => (
    <li key={`${index}${item.text}`}>
      <NavLink to={item.link} activeStyle={activeLinkStyles}>
        <NavLinkIcon>{item.icon}</NavLinkIcon>
        {item.descr}
      </NavLink>
    </li>
  ));

  return <NavListBox>{navListItems}</NavListBox>;
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

const activeLinkStyles = {
  color: 'var(--accent)',
};

export default NavList;
