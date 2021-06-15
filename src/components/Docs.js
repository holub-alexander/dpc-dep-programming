import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import replaceAllPoly from './../helpers/replaceAllPoly';

const Docs = () => {
  const data = useStaticQuery(graphql`
    query DocsQuery {
      markdownRemark(frontmatter: { page: { eq: "docs" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `);

  const formatHtml = replaceAllPoly(
    data.markdownRemark.html || '',
    'href=',
    'target="_blank" href='
  );

  return (
    <DocsBox>
      <h1 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: документы
      </h1>
      <Container>
        <Title>{data.markdownRemark.frontmatter.title || ''}</Title>
        <DocsWrapper>
          <div dangerouslySetInnerHTML={{ __html: formatHtml }} />
        </DocsWrapper>
      </Container>
    </DocsBox>
  );
};

const DocsBox = styled.section`
  padding: 50px 0;
  color: var(--dark-xl);
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 35px;

  @media screen and (max-width: 1180px) {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 23px;
    margin-bottom: 25px;
  }
`;

const DocsWrapper = styled.div`
  h2,
  h3,
  h4,
  h5 {
    margin: 30px 0 20px;
    font-weight: 500;
  }

  h2 {
    font-size: 23px;
  }

  h3 {
    font-size: 21px;
  }

  h4 {
    font-size: 19px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 17px;
  }

  ul {
    margin: 15px 0;
    padding-left: 15px;
    list-style: square;
  }

  li {
    font-size: 16px;
    margin-bottom: 10px;
  }

  a {
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
    color: var(--accent);

    :hover,
    :focus {
      color: var(--warning);
    }
  }

  p {
    font-size: 16px;
  }
`;

export default Docs;
