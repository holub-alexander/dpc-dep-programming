import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import replaceAllPoly from './../utils/replaceAllPoly';

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
  padding-top: 50px;
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
`;

const DocsWrapper = styled.div`
  h2,
  h3,
  h4,
  h5 {
    margin: 30px 0 20px;
    font-weight: 500;
  }

  ul {
    padding-left: 15px;
    list-style: square;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: var(--accent);
    margin-bottom: 9px;

    :hover,
    :focus {
      color: var(--warning);
    }
  }
`;

export default Docs;
