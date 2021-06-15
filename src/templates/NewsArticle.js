import React from 'react';
import styled from 'styled-components';
import Layout from './../components/layout';
import { graphql } from 'gatsby';
import { GlobalArticleStyles } from '../components/styles/GlobalArticleStyles';

const NewsArticle = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <GlobalArticleStyles />
      <NewsArticleBox>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </NewsArticleBox>
    </Layout>
  );
};

export const data = graphql`
  query NewsArticleQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        url
      }
    }
  }
`;

const NewsArticleBox = styled.article`
  padding: 45px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

export default NewsArticle;
