import React from 'react';
import styled from 'styled-components';
import { ContactInfo } from './ContactsList';
import NavList from './NavList';
import { useStaticQuery, graphql } from 'gatsby';

const contactInfo = [
  {
    title: 'Адрес',
    infoType: 'address',
    iconType: 'address',
  },
  {
    title: 'Телефон',
    infoType: 'phone',
    iconType: 'phone',
  },
];

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterContactsQuery {
      markdownRemark(frontmatter: { page: { eq: "index" } }) {
        frontmatter {
          address
          phone
        }
      }
    }
  `);

  return (
    <FooterBox>
      <Container>
        <FooterWrapper>
          <FooterNav>
            <NavList />
          </FooterNav>
          <FooterContacts>
            <List>
              {contactInfo.map((item, index) => (
                <li key={`${item.title}${index}`}>
                  <p>
                    <ContactInfo
                      title={item.title || ''}
                      info={data.markdownRemark.frontmatter[item.infoType]}
                      iconType={item.iconType}
                      isPosFooter='true'
                    />
                  </p>
                </li>
              ))}
            </List>
          </FooterContacts>
        </FooterWrapper>
        <FooterInfo>
          &copy; Донецкий политехнический колледж, {new Date().getFullYear()} г.
        </FooterInfo>
      </Container>
    </FooterBox>
  );
};

const FooterBox = styled.footer`
  background-color: var(--bg-dark);
  border-top: 1px solid #d2d2d2;
  padding-bottom: 35px;
  color: var(--dark-xl);
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterNav = styled.div`
  max-width: 810px;

  @media screen and (max-width: 1180px) {
    font-size: 13px;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const FooterContacts = styled.div`
  padding: 30px 0 15px;
  max-width: 350px;

  @media screen and (max-width: 992px) {
    max-width: none;
    width: 100%;
    text-align: center;

    ul li {
      display: inline-block;

      p {
        margin: 0 10px 0 10px;
      }
    }
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  p {
    margin: 0 0 0 25px;
    max-width: 360px;
    font-size: 14px;
    line-height: 1.7;
  }

  li {
    margin-bottom: 15px;

    :last-child {
      margin-bottom: 0;
    }
  }

  svg {
    margin-right: 7px;
  }
`;

const FooterInfo = styled.small`
  display: block;
  margin-top: 15px;
  width: 100%;
  text-align: center;
  font-size: 13px;
`;

export default Footer;
