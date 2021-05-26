import React from 'react';
import styled from 'styled-components';
import { FaRegBuilding } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsPeopleCircle } from 'react-icons/bs';
import { useStaticQuery, graphql } from 'gatsby';
import Social from './Social';

const ContactInfo = ({ title, info, iconType, isPosFooter = false }) => {
  const icons = {
    address: <FaRegBuilding />,
    email: <HiOutlineMail />,
    phone: <FiPhoneCall />,
    social: <BsPeopleCircle />,
  };

  return isPosFooter ? (
    <>
      <span>
        {icons[iconType] ?? null}
        {title}:{' '}
      </span>
      {info}
    </>
  ) : (
    <ContactInfoBox>
      <span>
        {icons[iconType] ?? null}
        {title}:{' '}
      </span>
      {info}
    </ContactInfoBox>
  );
};

const ContactsList = () => {
  const data = useStaticQuery(graphql`
    query ContactsListQuery {
      markdownRemark(frontmatter: { page: { eq: "index" } }) {
        frontmatter {
          address
          phone
          email
        }
      }
    }
  `);

  return (
    <List>
      <li>
        <ContactInfo
          title='Адрес'
          info={data.markdownRemark.frontmatter.address}
          iconType='address'
        />
      </li>
      <li>
        <ContactInfo
          title='Телефон'
          info={data.markdownRemark.frontmatter.phone}
          iconType='phone'
        />
      </li>
      <li>
        <ContactInfo
          title='Email'
          info={data.markdownRemark.frontmatter.email}
          iconType='email'
        />
      </li>
      <li>
        <ContactInfo title='Соцсети' info={<Social />} iconType='social' />
      </li>
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 23px;
`;

const ContactInfoBox = styled.div`
  margin: 0 0 30px;
  max-width: 400px;
  width: 100%;

  span {
    display: block;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 12px;
    transform: translateX(-23px);

    svg {
      margin-right: 8px;
    }
  }
`;

export { ContactInfo, ContactsList as default };
