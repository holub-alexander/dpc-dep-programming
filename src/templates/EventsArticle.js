import React from 'react';
import styled from 'styled-components';
import Layout from './../components/layout';
import { graphql } from 'gatsby';
import { GlobalArticleStyles } from '../components/styles/GlobalArticleStyles';

const EventsArticle = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <GlobalArticleStyles />
      <EventsArticleBox>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </EventsArticleBox>
    </Layout>
  );
};

export const data = graphql`
  query EventsArticleQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        url
      }
    }
  }
`;

const EventsArticleBox = styled.article`
  padding: 45px 0;
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

export default EventsArticle;
