import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';
import { Button } from './Button';
import { useStaticQuery, graphql } from 'gatsby';

const LastNews = () => {
  const data = useStaticQuery(graphql`
    query LastNewsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { page: { eq: "news" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            page
            title
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
    <LastNewsBox>
      <h2 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: последние
        новости
      </h2>
      <Container>
        <Title>Последние новости</Title>
        <News>
          {data.allMarkdownRemark.nodes.map((article, index) => {
            return <ArticleCard info={article.frontmatter} key={index} />;
          })}
        </News>
        <SeeAll>
          <Button to={'/news'}>Все новости</Button>
        </SeeAll>
      </Container>
    </LastNewsBox>
  );
};

const LastNewsBox = styled.section`
  margin-bottom: 65px;
  background-color: #fff;
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

const News = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(285px, 1fr));
  gap: 30px;
  margin-bottom: 45px;
`;

const SeeAll = styled.div`
  text-align: center;
`;

export default LastNews;
