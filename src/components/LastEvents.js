import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';
import { Button } from './Button';
import { useStaticQuery, graphql } from 'gatsby';

const LastEvents = () => {
  const data = useStaticQuery(graphql`
    query LastEventsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { page: { eq: "events" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            page
            descr
            url
            date
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return (
    <LastEventsBox>
      <h2 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: последние
        события
      </h2>
      <Container>
        <Title>Последние события</Title>
        <Events>
          {data.allMarkdownRemark.nodes.map((article, index) => {
            return <ArticleCard info={article.frontmatter} key={index} />;
          })}
        </Events>
        <SeeAll>
          <Button to={'/events'}>Все события</Button>
        </SeeAll>
      </Container>
    </LastEventsBox>
  );
};

const LastEventsBox = styled.section`
  margin-bottom: 65px;
  background-color: var(--bg-light);
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 35px;
  color: var(--dark-xl);
`;

const Events = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(285px, 1fr));
  gap: 30px;
  margin-bottom: 45px;
`;

const SeeAll = styled.div`
  text-align: center;
`;

export default LastEvents;
