import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import { useStaticQuery, graphql } from 'gatsby';

const AllNews = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AllNewsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { page: { eq: "news" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            url
            descr
            date
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AVIF, WEBP, JPG]
                )
              }
            }
          }
        }
      }
    }
  `);

  return (
    <AllNewsBox>
      <h2 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: все
        новости
      </h2>
      <Container>
        <Title>Все новости</Title>
        <NewsBox>
          {data.allMarkdownRemark.nodes.map((article, index) => {
            return (
              <ArticleCard
                info={article.frontmatter}
                key={index}
                location={location}
              />
            );
          })}
        </NewsBox>
      </Container>
    </AllNewsBox>
  );
};

const AllNewsBox = styled.section`
  padding: 45px 0;
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
`;

const NewsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(285px, 1fr));
  gap: 30px;
`;

export default AllNews;
