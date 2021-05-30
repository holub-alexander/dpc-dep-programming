import React from 'react';
import styled from 'styled-components';
import { ContactInfo } from './ContactsList';
import NavList from './NavList';
import { useStaticQuery, graphql } from 'gatsby';

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
              <li>
                <p>
                  <ContactInfo
                    title='Адрес'
                    info={data.markdownRemark.frontmatter.address}
                    iconType='address'
                    isPosFooter='true'
                  />
                </p>
              </li>
              <li>
                <p>
                  <ContactInfo
                    title='Телефон'
                    info={data.markdownRemark.frontmatter.phone}
                    iconType='phone'
                    isPosFooter='true'
                  />
                </p>
              </li>
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
  background-color: var(--light-x);
  border-top: 1px solid var(--border);
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
`;

const FooterNav = styled.div`
  max-width: 500px;
  max-width: 445px;
  width: 100%;
`;

const FooterContacts = styled.div`
  width: 100%;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;

  p {
    margin: 0 0 0 25px;
    max-width: 360px;
    font-size: 14px;
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
